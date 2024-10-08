import { useState } from "react"
import { UserCounterProps } from "./useCounter.type";

export const useCounter = ({initialCount = 0} : UserCounterProps = {}) => {
    const [count, setCount] = useState(initialCount);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
    return {count, increment, decrement};
}