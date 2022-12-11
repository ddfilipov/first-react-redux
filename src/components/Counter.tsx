import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { FC } from "react";
import { IState } from "../store";

export const Counter: FC = () => {
    const dispatch = useDispatch();
    const counter: number = useSelector((state: IState) => state.counter);
    const showCounter: boolean = useSelector((state: IState) => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: "increment" });
    };

    const increaseHandler = () => {
        dispatch({ type: "increase", amount: 5 });
    };

    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: "toggle" });
    };

    console.log("show counter:", showCounter);
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter ? <div className={classes.value}>{counter}</div> : null}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increse by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};
