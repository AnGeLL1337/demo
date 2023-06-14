import Form from 'react-bootstrap/Form'
import {useState} from 'react'
import {useDispatch} from "react-redux";
import { LessonActions } from '../reducers/lessonreducers';



//import {bindLessonActions} from "../reducers/_main"; //obsolete for now, might be deleted later
import {ChangeLessonTypeMutation} from "../queries/ChangeLessonTypeMutation";

export const LessonTypeSelectBox = (props) => {
    const {lesson} = props;
    const [selectedType, setSelectedType] = useState(lesson.type);
    const dispatch = useDispatch();
    //const {onLessonTypeSelect} = bindLessonActions(dispatch); //obsolete for now

    async function changeType(lesson) {
        const response = await ChangeLessonTypeMutation(lesson.id, lesson.lastchange, lesson.topic.lessons[0].type.id);
        const data = await response.json();
        if (data.data.plannedLessonUpdate.msg === 'ok') {
            const updatedLesson = data.data.plannedLessonUpdate.lesson;
            dispatch(LessonActions.lesson_update(updatedLesson));
            console.log("Successfully changed type")
        }
        else
        {
            console.log("error")
        }

    }
    const handleChange = (value) => {
        const type = value === 'NULL' ? null : value;
        setSelectedType(type);
        //onLessonTypeSelect({selectedLesson: selectedLesson, type: type}); //saving to redux, not needed for now
        //call select type mutation
        changeType(lesson).then(r => console.log("changeType done", r))




    }
    return (
        <Form.Select
            aria-label="LessonTypeBox"
            value={selectedType ?? 'NULL'}
            onChange={event => handleChange(event.target.value, lesson)}>
           <option>SS</option>
            <option value="e2b7c66a-95e1-11ed-a1eb-0242ac120002">cvičení</option>
            <option value="e2b7cbf6-95e1-11ed-a1eb-0242ac120002">přednáška</option>
            <option value="e2b7cfac-95e1-11ed-a1eb-0242ac120002">laboratorní cvičení</option>
            <option value="e2b7d1fa-95e1-11ed-a1eb-0242ac120002">seminář</option>
            <option value="e2b7d48e-95e1-11ed-a1eb-0242ac120002">konzultace</option>
            <option value="e2b7d88a-95e1-11ed-a1eb-0242ac120002">polní výcvik</option>
        </Form.Select>

    );
}

