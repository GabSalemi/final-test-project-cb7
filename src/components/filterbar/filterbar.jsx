import { getSpecificData } from "@/utils/functions";
import { useState, useContext, useReducer } from "react";
import { MainContext } from "@/state";
import Dropdown from "../dropdown";
import styles from "./filterbar.module.scss"

const FilterBar = ({ data }) => {
    const { state, dispatch } = useContext(MainContext);
    
    const [filterOptions, setFilterOptions ] = useState(() => getSpecificData(data, "departure"))
    const [generalOptions, setGeneralOption] = useState([
        {value: "SET__ALL", text: "Mostra Tutti"},
        {value: "SET__GROUP", text: "Mostra per luogo di partenza"}
    ])

    return <div className={styles.FilterBar}>
            <div className={styles.FilterBar__Wrapper}>
                <Dropdown options={generalOptions}/>
            </div>
            <div className={styles.FilterBar__Wrapper}>
                <Dropdown options={filterOptions}/>
            </div> 
        </div>
}

export default FilterBar;