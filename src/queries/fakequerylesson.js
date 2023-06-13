export const SingleLesson = {
    "id": "704e7bc2-b1d6-4fe3-95ce-b008b352dd59",
    "name": "Úvod",
    "lastchange": "2023-04-27T17:22:40.048220"
}
// Lesson Query by ID
 export const fakeQueryLesson = async (id) => ({json: () => {
    const json = JSON.stringify(SingleLesson)
    const result = JSON.parse(json)
    return {'plannedLessonById': {...result, id: id}}
 }})

