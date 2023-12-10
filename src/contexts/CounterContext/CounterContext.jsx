import React, { createContext, useContext, useReducer } from 'react'
import { DECREMENT, INCREMENT, RESET } from './actions';
import { decrement, increment, reset } from './actionsCreators';

const CounterContext = createContext({});

export const CounterProvider = ({ children }) => {

    const initialState = {
        count: 0
    };

    const reducer = (state, action) => {
        switch(action.type){
            case INCREMENT:
                return {
                    count: state.count + 1
                };
            case DECREMENT:
                return {
                    count: state.count - 1
                };
            case RESET:
                return {
                    count: 0
                };
            default:
                return state;
        }
     };

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleIncrementCount = () => {
        dispatch(increment());
    };

    const handleDecrementCount = () => {
        dispatch(decrement());
    };

    const handleResetCount = () => {
        dispatch(reset());
    };

    const providerValue = {
        state,
        onIncrement: handleIncrementCount,
        onDecrement: handleDecrementCount,
        onReset: handleResetCount
    };

    return <CounterContext.Provider value={providerValue} >
        {children}
    </CounterContext.Provider>
}

export default function useCounterContext() {
    return useContext(CounterContext);
}