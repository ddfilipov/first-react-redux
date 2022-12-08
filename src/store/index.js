import {createStore} from "redux"

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    }

    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }
};

const store = createStore(counterReducer);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
