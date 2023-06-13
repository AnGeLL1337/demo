import { useState } from 'react';
import { InputGroup, FormControl, Button} from 'react-bootstrap';

/**
 * Komponenta zobrazujúca vyhľadávací panel s textovým polom a tlačidlom pre vyhľadávanie lessons podľa ID.
 * @param {Object} props - Props objekt obsahujúci handleSearch funkciu, ktorá sa zavolá pri kliknutí na tlačidlo pre vyhľadávanie.
 * @param {Function} props.handleSearch - Funkcia zavolaná po kliknutí na tlačidlo pre vyhľadávanie, prijíma jeden parameter - lesson ID.
 * @returns {JSX.Element} Vráti JSX komponentu zobrazujúcu vyhľadávací panel.
 */

const SearchButton = ({handleSearch}) => {
    const [searchTerm, setSearchTerm] = useState('');


    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleSearchClick = ()  => {
        console.log(searchTerm)
        handleSearch(searchTerm);
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
                Search
            </Button>
        </InputGroup>
    );
};

export default SearchButton;