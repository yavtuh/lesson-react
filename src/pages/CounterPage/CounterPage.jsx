import React from 'react';
import useCounterContext from '../../contexts/CounterContext/CounterContext';
import './CounterPage.scss';

const CounterPage = () => {
    const { state, onIncrement, onDecrement, onReset } = useCounterContext();

    return (
        <div className="counter">
            <div className="counter__container">
                <div className="counter__title">
                    <h1>CounterPage</h1>
                </div>
                <div className="counter__text">
                    <p>Counter: <span>{state.count}</span></p>
                </div>
                <div className="counter__actions">
                    <button onClick={onIncrement} className="counter__button">Increment</button>
                    <button onClick={onDecrement} className="counter__button">Decrement</button>
                    <button onClick={onReset} className="counter__button">Reset</button>
                </div>
            </div>
        </div>
    )
}

export default CounterPage