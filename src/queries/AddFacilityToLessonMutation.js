import {authorizedFetch} from "./authorizedFetch";

const AddFacilityToLessonMutationJSON = (lessonId, facilityId) => ({
    query:`
    mutation(
        $lessonId: ID!,
        $facilityId: ID!,
    ) {
  plannedLessonFacilityInsert(facilitylesson: {
    planlessonId: $lessonId, 
    facilityId: $facilityId}) {
    id
    msg
    lesson {
        id
        name
        lastchange
        order
        groups { id, name }
        users { id, email }
        facilities { id, name }
        plan { id }
        topic { lessons { type { id, name } } }
    }
  }
}`,
    variables:{
        lessonId: lessonId,
        facilityId: facilityId,
    }
});

export const AddFacilityToLessonMutation = (props) =>
    authorizedFetch('/gql', {
        body: JSON.stringify(AddFacilityToLessonMutationJSON(props.lessonId, props.facilityId)),
    })