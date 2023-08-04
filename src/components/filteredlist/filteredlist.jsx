import { useState, useContext, useReducer } from "react"
import { MainContext } from "@/state"
import { dataFinder } from "@/utils/functions"
import Card from "../card"

import styles from "./filteredlist.module.scss"

const FilteredList = ({data, value}) => {
    const [filteredData, setFilteredData] = useState(() => dataFinder(data, value))
    

    return <div className={styles.Filtered}>
                {filteredData.map((item) => {
                    <Card data={item} />
                })}
            </div>

}   

export default FilteredList;