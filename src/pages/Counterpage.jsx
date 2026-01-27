import React from 'react'
import './styles/counterPage.css'
import useCounter from '../hooks/useCounter'
import { COUNTER_ACTIONS } from '../constants/counterActions'

const Counterpage = () => {

    const {counterState, counterDispatch} = useCounter();

    const incrementFn = () => counterDispatch({type: COUNTER_ACTIONS.INCREMENT});
    const decrementFn = () => counterDispatch({type: COUNTER_ACTIONS.DECREMENT});

    const handleChange = (e) => {
        const value = Number(e.target.value);

        if(!value)
            return;

        counterDispatch({type: COUNTER_ACTIONS.UPDATE_INC_VALUE, payload: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        counterDispatch({type: COUNTER_ACTIONS.ADD_INC_VALUE})
    }


  return (
    <div className='counter-page'>
        <h1>
            Welcome to my Counter Page
        </h1>

        <h3>Current count is: {counterState.count}</h3>

        <button onClick={incrementFn}>
            Increament
        </button>

        <button onClick={decrementFn}>
            Decreament
        </button>

        <form onSubmit={handleSubmit}>
            <h3>
                Add a lot!!
            </h3>

            <input 
            type="number"
            value={counterState.changeByValue || ""}
            onChange={handleChange}
             />

            <button type="submit">
                Add it
            </button>
        </form>

    </div>
  )
}

export default Counterpage