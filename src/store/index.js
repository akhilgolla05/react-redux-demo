import {legacy_createStore } from "redux";

//action as 2 params : type and payload
//in state, we set the counter value as 0
const reducerFn = (state = {counter : 0}, action)=>{

    //handle the state
    // conditions:
    //     1. it should be synchronous function
    //     2. we shoud not update the original state

    if(action.type === "INC"){
        return {counter: state.counter+1};
    }

    if(action.type === "DEC"){
        return {counter : state.counter - 1}
    }

    //handling the payload
    if(action.type === "ADD"){
        return {counter : state.counter + action.payload}
    }
    //return the state
    return state;
}

//create store needs a reducer
const store = legacy_createStore(reducerFn)

export default store;