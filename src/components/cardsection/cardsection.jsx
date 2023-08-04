import { useState, useRef } from "react";
import Card from "../card/card";
import Button from "../button";
import styles from "@/components/cardsection/cardsection.module.scss";

const CardSection = ({data}) => {
    const [showMore, setShowMore] = useState(false)
    const [showMoreSlicer, setShowMoreSlicer] = useState()
    const showMoreCounter = useRef(0)

    return <div className={styles.Card__Section}>
                {data.slice(0, showMoreSlicer).map((item) => {
                    return <Card data={item} key={item.id} />
                })}
                <div className={styles.Card__Section__Button} onClick={showMoreCounter}>
                    <Button text={"Mostra Altri"}/>
                </div>
        </div>
}

export default CardSection;