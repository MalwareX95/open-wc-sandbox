import { Action } from "redux"

export const INCREMENT = 'INCREMENT'
export const LOGGING = 'LOGGING'
export const ONINCREMENTSUCCEED = 'ONINCREMENTSUCCEED'
export const DECREMENT = 'DECREMENT'
export const TODOSFETCHSUCCEED = 'TODOSFETCHSUCCEED'
export const FETCHTODOS = 'FETCHTODOS'

export interface CounterActionIncrement extends Action<'INCREMENT'>{}
export interface CounterActionDecrement extends Action<'DECREMENT'>{}
export interface CounterActionLogging extends Action<'LOGGING'>{}
export interface CounterActionFetchToDos extends Action<'FETCHTODOS'>{}
export interface CounterActionToDosFetchSucceed extends Action<'TODOSFETCHSUCCEED'>{
    todos: any[]
}

export type CounterAction = CounterActionIncrement | CounterActionDecrement

