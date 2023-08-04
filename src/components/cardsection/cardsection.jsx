import Card from "../card/card";
import styles from "@/components/cardsection/cardsection.module.scss";

const CardSection = ({data}) => {

    return <div className={styles.Card__Section}>
                {data.map((item) => {
                    return <Card data={item} key={item.id} />
                })}
        </div>
}

export default CardSection;