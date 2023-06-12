import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import { bindGroupActions } from 'reducers/_main';
import { bindLessonActions } from "reducers/_main";
import { bindUserActions } from "reducers/_main";
import { bindFacilityActions } from "../reducers/_main";
import { GroupReducer } from 'reducers/groupreducers';
import { LessonReducer } from 'reducers/lessonreducers';
import { UserReducer } from 'reducers/usersreducers';
import { FacilityReducer } from "../reducers/facilityreducers";


/**
 * Toto je hlavni store pro celou aplikaci. Zde zacleneno pro demonstraci. 
 */
export const store = configureStore(
    { 
        reducer: {
            groups: GroupReducer,
            lessons: LessonReducer,
            users: UserReducer,
            facilities: FacilityReducer
        }, 
        preloadedState: {
            groups: {},
            lessons: {},
            users: { users: []},
            facilities: { facilities: []}
        },
        devTools: true
})

const dispatch = store.dispatch

/**
 * Vsechny akce / callbacky pro celou aplikaci
 * Lze je kdekoliv importovat a vyuzit. 
 * Je ovsem zadouci, aby se tyto dostaly ke "spodnim" komponentam pres props.
 * Tim se zabezpeci jejich "purity" (nejsou zavisle na globalnich parametrech)
 */
export const actions = {
    ...bindGroupActions(dispatch),
    ...bindLessonActions(dispatch),
    ...bindUserActions(dispatch),
    ...bindFacilityActions(dispatch),
}

/**
 * Zapouzdruje vnorene komponenty a umoznuje jim vyuzivat store - centralni data
 */
export const AppProvider = (props) => {
    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}