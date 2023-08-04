import { useState } from "react"
import { getSpecificData } from "@/utils/functions"
import Card from "../card"
import styles from "./filteredlist.module.scss"

const FilteredList = ({data}) => {
    const [filterDeparture, setFilterDeparture] =useState(getSpecificData(data, "departure"))

    return <div className={styles.Filter}>
                {filterDeparture && filterDeparture.map((value) => {
                    return <div className={styles.Filter__Section}>
                        <h2 className={styles.Filter__Section__Value}>{value}</h2>
                        {data.filter((item) => item.departure.Port === value).map((item) => {
                            return <div className={styles.Filter__Section__Wrapper}>
                                <Card data={item} key={item.id}/>
                            </div>
                        })
                            
                        }
                    </div>
                    
                })}
            </div>
}

export default FilteredList;