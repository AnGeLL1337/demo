import { useState } from 'react';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
import {useDispatch, useSelector} from "react-redux";
import {SelectedLessonActions} from "../reducers/selectedLessonReducer";

/**
 * Komponenta zobrazujúca vyhľadávací panel s textovým polom a tlačidlom pre vyhľadávanie selectedLesson podľa ID.
 * @returns {JSX.Element} Vráti JSX komponentu zobrazujúcu vyhľadávací panel.
 */

const SearchButton = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const lessons = useSelector((state) => state.lessons);


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearchClick = ()  => {
        const selectedLesson = lessons[searchTerm] || null;
        console.log("handleSearchClick", selectedLesson);
        dispatch(SelectedLessonActions.setSelectedLesson(selectedLesson));
    };

    return (
        <InputGroup className="mb-3">
            <FormControl
                placeholder="Lesson ID"
                aria-label="Search"
                aria-describedby="basic-addon2"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <Button variant="primary" id="button-addon2" onClick={handleSearchClick}>
                Select a lesson
            </Button>
        </InputGroup>
    );
};

export default SearchButton;