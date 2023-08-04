import { useState, useContext, useReducer } from "react"
import { MainContext } from "@/state"

import styles from "./dropdown.module.scss"

const Dropdown = ({options}) => {
    const { state, dispatch } = useContext(MainContext);

    const setGroup = (e, option = null) => {
        console.log(e.target.value)
        if (e.target.value === "Mostra Tutti") {
            dispatch({type: "SET__ALL"})
        } else if (e.target.value === "Mostra per luogo di partenza") {
            dispatch({type: "SET__GROUP"})
        } else {
            dispatch({type: "SET__FILTER", payload: e.target.value})
        }
    }
 
 
    return <div className={styles.Dropdown}>
            <select onChange={(e) => setGroup(e)}>
                {options[0].value ?
                options.map( option => {
                    return <option>{option.text}</option> 
                }) : 
                options.map( option => {
                    return <option>{option}</option>
                })
                }
            </select> 
        
    </div>
}

export default Dropdown;