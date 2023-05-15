import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import {useDispatch} from "react-redux";


import {bindLessonActions} from "../reducers/_main";

export const LessonTypeSelectBox = (props) => {
    const {lesson} = props;
    const [selectedType, setSelectedType] = useState(lesson.type);
    const dispatch = useDispatch();
    const {onLessonTypeSelect} = bindLessonActions(dispatch);
    const handleChange = (value) => {
        const type = value === 'NULL' ? null : value;
        setSelectedType(type);
        onLessonTypeSelect({lesson: lesson, type: type}); //##ADD it later when you figure out store
        console.log(type);

    }

    return (
        <Form.Select
            aria-label="LessonTypeBox"
            value={selectedType ?? 'NULL'}
            onChange={event => handleChange(event.target.value)}
        >
            <option>NULL</option>
            <option value="přednáška">P</option>
            <option value="cvičení">CV</option>
            <option value="laborky">LAB</option>
            <option value="seminář">SEM</option>
        </Form.Select>

    );
}

