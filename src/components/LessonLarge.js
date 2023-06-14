import Card from "react-bootstrap/Card";

import {LessonCard} from "./LessonCard";

/**
 * Komponent LessonLarge predstavuje kartu so zobrazením detailov o lesson.
 *
 * @param {Object} lesson - Objekt s informáciami o lesson.
 * @param {Object} actions - Objekt so zoznamom funkcií, ktoré možno na lesson vykonať.
 * @returns {JSX.Element} Karta so zobrazením detailov o lesson.
 */

export const LessonLarge = ({lesson, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Selected Lesson {lesson.id}
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <LessonCard lessons={lesson} actions={actions} />
            </Card.Body>
        </Card>
    )
}