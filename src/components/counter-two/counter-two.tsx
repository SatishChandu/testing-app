import { counterTwoProps } from "./counter-two.type";

export const CounterTwo = (props: counterTwoProps) => {
    
    return (
        <div>
            <h1>Counter Two</h1>
            <p>{props.count}</p>
            {props.handleIncrement && (
                <button onClick={props.handleIncrement}>Increment</button>
            )}
            {props.handleDecrement && (
                <button onClick={props.handleDecrement}>Decrement</button>
            )}
        </div>
    )
}