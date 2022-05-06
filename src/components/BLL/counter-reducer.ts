export const initialState = {
    value: 0,
    startValue: 1,
    maxValue: 5,
    error: ''
}

type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: CounterReducerType): InitialStateType => {

    switch (action.type) {
        case 'INCREMENT-COUNT': {
            return {
                ...state,
                value: state.value + 1
            }
        }
        case "RESET-COUNT": {
            return {
                ...state,
                value: state.startValue
            }
        }
        case "SET-START-VALUE": {
            return {
                ...state,
                startValue: action.value
            }
        }
        case "SET-MAX-VALUE": {
            return {
                ...state,
                maxValue: action.value
            }
        }
        case "SET-VALUES": {
            return {
                ...state,
                value: state.startValue, error: ''
            }
        }
        default:
            return state
    }
}

type CounterReducerType = IncrementCountActionType
    | ResetCountActionType
    | SetStartValueActionType
    | SetMaxValueActionType
    | SetValuesActionType


export type IncrementCountActionType = ReturnType<typeof incrementCountAC>
export type ResetCountActionType = ReturnType<typeof resetCountAC>
export type SetStartValueActionType = ReturnType<typeof setStartValueAC>
export type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
export type SetValuesActionType = ReturnType<typeof setValuesAC>

export const incrementCountAC = () => {
    return {type: 'INCREMENT-COUNT'} as const
}

export const resetCountAC = () => {
    return {type: 'RESET-COUNT'} as const
}

export const setStartValueAC = (value: number) => {
    return {type: 'SET-START-VALUE', value} as const
}

export const setMaxValueAC = (value: number) => {
    return {type: 'SET-MAX-VALUE', value} as const
}
export const setValuesAC = () => {
    return {type: 'SET-VALUES'} as const
}