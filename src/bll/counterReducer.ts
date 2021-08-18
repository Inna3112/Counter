const initialState = {
    num: 0,
    maxValue: 1,
    minValue: 0,
    error: true,
    errorMessage: "Enter values and press 'set'!" as ErrorMessageType
} as InitialStateType

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET-NUM":
            return {...state,
                num: state.num < action.maxValue ? state.num + 1 : action.maxValue}
        case "RESET-NUM":
            return {...state, num: state.minValue}
        case "INCREASE-INCREMENT": {
            return {...state, num: action.newNum}
        }
        case "SET-MAX-VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET-MIN-VALUE":
            return {...state, minValue: action.minValue}
        case "SET-ERROR":
            return {...state, error: action.error, errorMessage: action.errorMessage}
        default:
            return state
    }
}
//actionCreators
export const setNum = (maxValue: number) => ({type: 'SET-NUM', maxValue} as const)
export const resetNum = () => ({type: 'RESET-NUM'} as const)
export const increseIncremet = (newNum: number) => ({type: 'INCREASE-INCREMENT', newNum} as const)
export const setMaxValue = (maxValue: number) => ({type: 'SET-MAX-VALUE', maxValue} as const)
export const setMinValue = (minValue: number) => ({type: 'SET-MIN-VALUE', minValue} as const)
export const setError = (error: boolean, errorMessage: ErrorMessageType) => ({type: 'SET-ERROR', error, errorMessage} as const)

//types
export type InitialStateType = {
    num: number
    maxValue: number
    minValue: number
    error: boolean
    errorMessage: ErrorMessageType
}
type ErrorMessageType = "Enter values and press 'set'!" | "Incorrect value" | ""
type ActionType = ReturnType<typeof setNum>
    | ReturnType<typeof resetNum>
    | ReturnType<typeof increseIncremet>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setMinValue>
    | ReturnType<typeof setError>