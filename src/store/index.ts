import { AnyAction, createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

export interface IState {
    counter: number;
    showCounter: boolean;
}

const initialState: IState = { counter: 0, showCounter: true };

createSlice({
    name: "counter",
    initialState: initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter = state.counter + action.payload;
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const counterReducer = (state = initialState, action: AnyAction) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "increase") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }

    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        };
    }

    return state;
};

const store = createStore(counterReducer);

export default store;
