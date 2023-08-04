import { useState } from "react"
import { getSpecificData } from "@/utils/functions"
import Card from "../card"
import styles from "./grouplist.module.scss"

const GroupList = ({data}) => {
    const [filterDeparture, setFilterDeparture] =useState(getSpecificData(data, "departure"))

    return <div className={styles.Group}>
                {filterDeparture && filterDeparture.map((value) => {
                    return <div className={styles.Group__Section}>
                                <h2 className={styles.Group__Section__Value}>{value}</h2>
                                        <div className={styles.Group__Section__Wrapper}>
                                            {data.filter((item) => item.departure.Port === value).map((item) => {
                                                return <Card data={item} key={item.id}/>
                                                })}
                                        </div>
                            </div>
                        })}
            </div>
}

export default GroupList;