import { Reducer } from "redux"
import { CounterState } from "./types/app"
import { RootAction, appTypes } from "../actions"

const INITIAL_STATE : CounterState = {
    clicks: 0,
    value: 0
}

const counter: Reducer<CounterState, RootAction> = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case appTypes.INCREMENT:
            return {
                clicks: state.clicks + 1,
                value: state.value + 1
            }
        case appTypes.DECREMENT:
            return {
                clicks: state.clicks - 1,
                value: state.value - 1
            }
        default:
            return state
    }
}

export default counter
