import { createStore } from "redux";

interface IState {
    counter: number;
    showCounter: boolean;
}

const initialState: IState = { counter: 0, showCounter: true };

const counterReducer = (state = initialState, action) => {
    console.log(
        "hola entrando en counterReducer. counter:",
        initialState.counter,
        "showCounter:",
        initialState.showCounter
    );
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