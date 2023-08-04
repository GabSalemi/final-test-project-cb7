import Card from "../card/card";
import { useState } from "react";
import { randomizer } from "@/utils/functions";
import styles from "@/components/cardsection/cardsection.module.scss";
import dynamic from "next/dynamic";


const RandomSection = ({data}) => {
    const [randomData, setRandomData] = useState(() => randomizer(data))
        

    return <div className={styles.RandomSection}>
                {randomData && randomData.map((item) => {
                    return <Card data={item} key={item.code}/>
                })}
        </div>
}

export default dynamic (() => Promise.resolve(RandomSection), {ssr: false})
