import { createContext, useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const Context = createContext();

export const useContextWhitRedux = () => {

    function fistLetterUpperCase(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    let listReducers = {}; //* {setHome,setGlobal}.
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    //* Se llena la lista de reducers que contendrá todo los set de mis reducers.
    for (let name in state) {
        const setName = "set" + fistLetterUpperCase(name);
        listReducers = {
            ...listReducers,
            [setName]: (data, actionName) => {
                data = { [name]: data }
                if (actionName)
                    dispatch({ type: actionName, payload: data })
                else
                    dispatch({ type: Object.keys(data)[0], payload: data })
            }
        }

    }

    //* Ejemplo de cómo funcionan los set: 

    //* const list = ["pepe","francisco"];
    //* setHome({list},"getList");

    //$ Resultado en Redux: 
    //$ home: list: [] Pasa a => home: list: ["pepe","francisco"]


    return ({ state, listReducers })

}

export const useRedux = () => {
    const context = useContext(Context);
    return context;
};