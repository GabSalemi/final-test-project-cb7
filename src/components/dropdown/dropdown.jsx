import { useState, useContext, useReducer } from "react"
import { MainContext } from "@/state"

import styles from "./dropdown.module.scss"

const Dropdown = ({options}) => {
    const { state, dispatch } = useContext(MainContext);

    const setGroup = (e, option = null) => {
        if (e.target.value === "Mostra Tutti") {
            dispatch({type: "SET__ALL"})
        } else if (e.target.value === "Mostra per luogo di partenza") {
            dispatch({type: "SET__GROUP"})
        } else {
            dispatch({type: "SET__FILTER", payload: e.target.value})
        }
    }
 
 
    return <div className={styles.Dropdown}>
            <select onChange={(e) => setGroup(e)} className={styles.Dropdown__Select}>
                {options[0].value ?
                options.map( option => {
                    return <option className={styles.Dropdown__Select__Option}>{option.text}</option> 
                }) : 
                options.map( option => {
                    return <option value={option} className={styles.Dropdown__Select__Option}>{option}</option>
                })
                }
            </select> 
        
    </div>
}

export default Dropdown;