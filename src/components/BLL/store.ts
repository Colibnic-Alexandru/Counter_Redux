import {combineReducers, createStore} from "redux";
import {counterReducer} from './counter-reducer'
import {loadState, saveState} from "../Utils/localStorageUtils";


const rootReducer = combineReducers({
    counter: counterReducer
})

export const store = createStore(rootReducer,loadState())

store.subscribe(() => {
    saveState ({
        counter: store.getState().counter
    })
})
export type AppStateType = ReturnType<typeof rootReducer>


