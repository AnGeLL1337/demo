import Card from "react-bootstrap/Card";

import {LessonTable} from "./LessonTable";

/**
 * Renders a card containing a list of selectedLesson.
 */

export const LessonCard = ({lessons, actions}) => {
    return (
        <Card>
            <Card.Header>
                <Card.Title>
                    Selected Lesson
                </Card.Title>
            </Card.Header>
            <Card.Body>
                <LessonTable lessons={lessons} actions={actions}/>
            </Card.Body>
        </Card>
    )
}