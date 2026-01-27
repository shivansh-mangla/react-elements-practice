import React, { useReducer } from 'react'

const INCREMENT = 'increment'
const DECREMENT = 'decrement'
const UPDATE_INC_VALUE = 'update-inc-value'
const ADD_INC_VALUE = 'add-inc-value'

const useCounter = () => {

    const reducer = (state, action) => {

        switch(action.type){
            case INCREMENT:
                return {
                    ...state,
                    count: state.count + 1
                }
            case DECREMENT:
                return {
                    ...state,
                    count: state.count - 1
                }
            case UPDATE_INC_VALUE:
                return {
                    ...state,
                    changeByValue: action.payload
                }
            case ADD_INC_VALUE:
                return {
                    ...state,
                    count: state.count + state.changeByValue,
                    changeByValue: 0
                }
        }

        return state;
    }

    const initialState = {
        count: 0,
        changeByValue: 0
    }

    const [counterState, counterDispatch] = useReducer(reducer, initialState);

  return {counterState, counterDispatch}
}

export default useCounter