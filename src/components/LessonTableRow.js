import {DeleteButton} from "components/DeleteButton";
import {LessonUserSelectBox} from "components/LessonUserSelectBox";
import {LessonFacilitySelectBox} from "components/LessonFacilitySelectBox";
import {LessonTypeSelectBox} from "components/LessonTypeSelectBox";
import UpdateLessonOrderButton from "./UpdateLessonOrderButton";
import {useState} from "react";

/**
 * Komponenta reprezentujúca jeden riadok v tabuľke s lekciami.
 *
 * @param {Object} lesson - Objekt predstavujúci lesson, obsahujúci vlastnosti id, name, lastchange a user.
 * @param {Object} actions - Objekt s akciami, ktoré sa majú vykonať pri kliknutí na tlačidlá v riadku.
 * @param {Function} actions.onLessonRemove - Funkcia pre vymazanie lesson zo storu.
 * @returns {JSX.Element} JSX.Element
 */
export  const LessonTableRow = ({lesson, actions}) => {


    const [order, setOrder] = useState(lesson.order);


    const onClick = () => {
        const payload = {lesson: lesson}
        actions.onLessonRemove(payload)
        console.log('jdu smazat hodinu')
    }

    const onOrderChange = (event) => {
        setOrder(Number(event.target.value))
    };

    return (
        <tr>
            <td>{lesson.id}</td>
            <td>{lesson.name}</td>
            <td>{lesson.lastchange}</td>
            <td>{lesson.order}</td>
            <td><LessonTypeSelectBox lesson={lesson}></LessonTypeSelectBox></td>
            <td>
                <input type="number" value={order} onChange={onOrderChange} ></input>
                <UpdateLessonOrderButton
                    lessonId={lesson.id}
                    lastchange={lesson.lastchange}
                    order={order}
                    actions={actions}
                />
            </td>
            <td><LessonUserSelectBox lesson={lesson}> </LessonUserSelectBox></td>
            <td><LessonFacilitySelectBox lesson={ lesson }> </LessonFacilitySelectBox></td>
            <td>
                <DeleteButton onClick={onClick}>Zmaž</DeleteButton>
            </td>
        </tr>
    )

}