import Form from 'react-bootstrap/Form'

import {useState} from 'react'
import {useDispatch} from "react-redux";

import {bindLessonActions} from "../reducers/_main";


/**
 * Komponenta pre výber učebny pre konkrétnu lesson
 *
 * @param {Object} props - Props pre komponentu.
 * @param {Object} props.lesson - Objekt lesson.
 * @returns {JSX.Element} Komponenta pre výber učebny pre konkrétnu lesson.
 */


export const LessonFacilitySelectBox = (props) => {
    const {lesson} = props;
    const [selectedFacility, setSelectedFacility] = useState(lesson.facility);
    const dispatch = useDispatch();
    const { onLessonFacilitySelect } = bindLessonActions(dispatch);

    const handleSelect = (value) => {
        const facility = value === 'NULL' ? null : value;
        setSelectedFacility(facility);
        onLessonFacilitySelect({lesson: lesson, facility: facility})
    }
    return (
        <Form.Select
            key={`${lesson.id}-${lesson.facility}`}
            aria-label="LessonFecilitySelectBox"
            value= {selectedFacility ?? 'NULL'}
            onChange={(e) => handleSelect(e.target.value)}
        >
            <option>NULL</option>
            <option value="K189">K189</option>
            <option value="K190">K190</option>
            <option value="K191">K191</option>
            <option value="S6/18">S6/18</option>

        </Form.Select>
    );
};

