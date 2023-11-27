import { useState } from "react";
import './Counter.css';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <div className="counter">
                <div className="counter__text">{counter}</div>
                <div className="counter__button">
                    <button onClick={() => setCounter(counter-1)} className="counter__button-decrement">Decrement</button>
                    <button onClick={() => setCounter(counter+1)} className="counter__button-increment">Increment</button>
                </div>
            </div>
        </>
    )
}

export default Counter;