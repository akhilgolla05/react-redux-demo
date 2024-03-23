import { configureStore, createSlice } from "@reduxjs/toolkit";
import { legacy_createStore } from "redux";

//create a slice
const counterSlice = createSlice({

    //name of the slice
    name : "counter",
    //initial state
    initialState : {counter : 0},

    //reducers - it will be an object
    reducers : {
        //function names
        increment(state, action){
            //we can directly mutate the state
            //should not give hardcoded value
            state.counter++;
        },
        decrement(state, action){

            state.counter--;
        },
        addBy(state, action){

            state.counter += action.payload;
        }
    }
}

    
)

export const actions = counterSlice.actions;

const store = configureStore({
    reducer: counterSlice.reducer
});

export default store;