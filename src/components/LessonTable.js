import  {LessonTableRow} from "./LessonTableRow";

/**
 * Komponent LessonTable zobrazuje zoznam všetkých lessons v tabuľkovej forme.
 *
 * @param {Object[]} lessons - Pole objektov reprezentujúcich jednotlivé lessons.
 * @param {Object} actions - Objekt obsahujúci akcie, ktoré môžu byť vykonané na lessons.
 */

export const LessonTable = ({lessons, actions}) => {
    console.log(lessons)
    return (
        <table className="table table-hover table-stripped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Název</th>
                    <th>Poslední změna</th>
                    <th>Pořadí</th>
                    <th>Typ lekce</th>
                    <th>Změna pořadí</th>
                    <th>Zmazať lekci</th>
                </tr>
            </thead>
            <tbody>
               <LessonTableRow lesson={lessons} actions={actions}/>
            </tbody>
        </table>
    )
}