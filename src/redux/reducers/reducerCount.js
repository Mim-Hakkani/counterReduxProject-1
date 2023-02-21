import { ADD_DECREMENT, ADD_INCREMENT } from "../actionTypes/actionType";

const initialCount = 0;


const reducerCount = (state = initialCount, action) => {

    switch (action.type) {
        case ADD_INCREMENT: return state+=1;
        case ADD_DECREMENT: return state-=1;
        default : return state;

    }
}

export default reducerCount;