import {SelectedLessonTableRow} from "./SelectedLessonTableRow";

/**
 * Komponent LessonTable zobrazuje zoznam všetkých selectedLesson v tabuľkovej forme.
 *
 * @param {Object} lesson - Pole objektov reprezentujúcich jednotlivé selectedLesson.
 * @param {Object} actions - Objekt obsahujúci akcie, ktoré môžu byť vykonané na selectedLesson.
 */

export const SelectedLessonTable = ({lesson, actions}) => {
    console.log("LessonTable", lesson);
    return (
        <table className="table table-hover table-stripped">
            <thead>
            <tr>
                <th>Id</th>
                <th>Název</th>
                <th>Poslední změna</th>
                <th>Pořadí</th>
                <th>Učitelia</th>
                <th>Zařízení</th>
            </tr>
            </thead>
            <tbody>
            <SelectedLessonTableRow selectedLesson={lesson} actions={actions}/>
            </tbody>
        </table>
    )
}