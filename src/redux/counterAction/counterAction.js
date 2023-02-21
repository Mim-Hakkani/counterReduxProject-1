import { ADD_DECREMENT, ADD_INCREMENT } from "../actionTypes/actionType"

export const increment=()=>{
    return {
        type:ADD_INCREMENT
    }
}

export const decrement=()=>{
    return {
        type:ADD_DECREMENT
    }
}
