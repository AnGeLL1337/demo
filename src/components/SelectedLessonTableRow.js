import RemoveUserFromLessonButton from './RemoveUserFromLessonButton';

/**
 * Komponenta reprezentujúca jeden riadok v tabuľke s lekciami.
 *
 * @param {Object} lesson - Objekt predstavujúci selectedLesson, obsahujúci vlastnosti id, name, lastchange a user.
 * @returns {JSX.Element} JSX.Element
 */
export  const SelectedLessonTableRow = ({selectedLesson}) => {


    return (
        <tr>
            <td>{selectedLesson.id}</td>
            <td>{selectedLesson.name}</td>
            <td>{selectedLesson.lastchange}</td>
            <td>{selectedLesson.order}</td>
            <td>
                {selectedLesson.users?.length > 0 ? (
                    selectedLesson.users.map((user) => (
                        <>
                            <div key={user.id}>{user.email}</div>
                            <RemoveUserFromLessonButton userId={user.id} lessonId={selectedLesson.id} />
                        </>
                    ))
                    ) : (
                        <div>No users</div>
                    )}
            </td>
            <td>
                {selectedLesson.facilities?.length > 0 ? (
                selectedLesson.facilities.map((facility) => (
                    <div key={facility.id}>{facility.name}</div>
                ))
                ) : (
                    <div>No facilities</div>
                )}
            </td>
        </tr>
    )

}