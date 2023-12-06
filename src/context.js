import React, { useContext, useReducer, useState } from "react";
import data from "./data"
import { reducer } from './reducer';
const AppContext = React.createContext();
export const AppProvider=({children})=>{

    const defaultState = {
    cart: data,
    };

    const [state, dispatch] = useReducer(reducer, defaultState);

    const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
    };

    const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
    };

    const removeItem = (id) => {
    dispatch({type: "REMOVE", payload: id});
    }

    const zeroAmount=()=>{
    dispatch({type:"ZERO"})
    }
    return(
        <AppContext.Provider value={{state,increaseItem,decreaseItem,removeItem,zeroAmount}}>{children} 
        </AppContext.Provider>
    )
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}

