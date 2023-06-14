import DeleteLessonButton from "./DeleteLessonButton";

/**
 * Komponenta reprezentujúca jeden riadok v tabuľke s lekciami.
 *
 * @param {Object} lesson - Objekt predstavujúci lesson, obsahujúci vlastnosti id, name, lastchange a user.
 * @param {Object} actions - Objekt s akciami, ktoré sa majú vykonať pri kliknutí na tlačidlá v riadku.
 * @param {Function} actions.onLessonRemove - Funkcia pre vymazanie lesson zo storu.
 * @returns {JSX.Element} JSX.Element
 */
export  const SelectedLessonTableRow = ({lesson, actions}) => {


    return (
        <tr>
            <td>{lesson.id}</td>
            <td>{lesson.name}</td>
            <td>{lesson.lastchange}</td>
            <td>{lesson.order}</td>
            <td>
                <DeleteLessonButton
                    lessonId={lesson.id}
                    lastchange={lesson.lastchange}
                    actions={actions}
                />
            </td>
        </tr>
    )

}