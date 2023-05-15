import {DeleteButton} from "components/DeleteButton";
import {LessonUserSelectBox} from "components/LessonUserSelectBox";
import {LessonFacilitySelectBox} from "components/LessonFacilitySelectBox";
import {LessonTypeSelectBox} from "components/LessonTypeSelectBox";


/**
 * Komponenta reprezentujúca jeden riadok v tabuľke s lekciami.
 *
 * @param {Object} lesson - Objekt predstavujúci lesson, obsahujúci vlastnosti id, name, lastchange a user.
 * @param {Object} actions - Objekt s akciami, ktoré sa majú vykonať pri kliknutí na tlačidlá v riadku.
 * @param {Function} actions.onLessonRemove - Funkcia pre vymazanie lesson zo storu.
 * @returns {JSX.Element} JSX.Element
 */
export  const LessonTableRow = ({lesson, actions}) => {

    const onClick = () => {
        const payload = {lesson: lesson}
        actions.onLessonRemove(payload)
        console.log('jdu smazat hodinu')
    }


    return (
        <tr>
            <td>{lesson.id}</td>
            <td>{lesson.name}</td>
            <td>{lesson.lastchange}</td>
            <td><LessonTypeSelectBox lesson={lesson}></LessonTypeSelectBox></td>
            <td><LessonUserSelectBox lesson={lesson}> </LessonUserSelectBox></td>
            <td><LessonFacilitySelectBox lesson={ lesson }> </LessonFacilitySelectBox></td>
            <td>
                <DeleteButton onClick={onClick}>Zmaž</DeleteButton>
            </td>
        </tr>
    )
}