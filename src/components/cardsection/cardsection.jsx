import { useState, useRef } from "react";
import Card from "../card/card";
import Button from "../button";
import styles from "@/components/cardsection/cardsection.module.scss";

const CardSection = ({data}) => {
    const [closeButton, setCloseButton] = useState(false)
    const [showMoreSlicer, setShowMoreSlicer] = useState(8)

    const onHandleShowMore = () => {
        if (showMoreSlicer >= 32) {
            setShowMoreSlicer(8)
        } else {
            setShowMoreSlicer(prev => prev + 8)
        }

    }


    return <div className={styles.Card__Section}>
                {data.slice(0, showMoreSlicer).map((item) => {
                    return <Card data={item} key={item.id} />
                })}
                <div className={styles.Card__Section__Button} >
                    {closeButton ? <div className={styles.More__Button} onClick={onHandleShowMore}>Mostra meno</div> : <div className={styles.More__Button} onClick={onHandleShowMore}>Mostra altri</div>}
                </div>
        </div>
}

export default CardSection;