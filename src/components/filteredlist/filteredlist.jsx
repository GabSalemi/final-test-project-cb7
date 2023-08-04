import { useState, useContext, useReducer } from "react"
import { MainContext } from "@/state"
import { filteredByPort } from "@/utils/functions"
import Card from "../card"

import styles from "./filteredlist.module.scss"

const FilteredList = ({data, value}) => {

    return <div className={styles.Filtered}>
            {data.filter((item) => item.departure.Port === value).map((item) => {
                                        return <div className={styles.Filtered__Section__Wrapper}>
                                            <Card data={item} key={item.id}/>
                                                </div>
                                            })}
                
            </div>
}   

export default FilteredList;