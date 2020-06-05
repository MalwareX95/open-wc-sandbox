
import { CounterActionIncrement, CounterActionFetchToDos, CounterActionToDosFetchSucceed, CounterActionDecrement, CounterActionLogging } from './types/appTypes'
import { ActionCreator } from 'redux'
import { appTypes } from './types'

export const decrement: ActionCreator<CounterActionDecrement> = () => ({type: appTypes.DECREMENT})

export const logging: ActionCreator<CounterActionLogging> = () => ({type: appTypes.LOGGING})

export const increment: ActionCreator<CounterActionIncrement> = () => ({type: appTypes.INCREMENT})

export const fetchToDos: ActionCreator<CounterActionFetchToDos> = () => {
    return {
        type: appTypes.FETCHTODOS
    }
}

export const toDofetchedSucceed: ActionCreator<CounterActionToDosFetchSucceed> = (todos) => {
    return {
        type: appTypes.TODOSFETCHSUCCEED,
        todos
    }
}
