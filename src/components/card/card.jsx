import styles from "./card.module.scss";

const Card = ({data}) => {
    console.log(data)

    return <div className={styles.Card}>

            <div className={styles.Card__Header}>
                <div className={styles.Card__Header__Detail}>
                    <h3 className={styles.Card__Header__Detail__Price}></h3>
                    <h5 className={styles.Card__Header__Detail__Info}>{data.title}</h5>
                </div>
                <div className={styles.Card__Header__Title}>
                    <h2 className={styles.Card__Header__Title__Text}></h2>
                </div>
            </div>
            <div className={styles.Card__Main}>
                <div className={styles.Card__Main__Info}>
                    <div className={styles.Info__Port}>
                        <h4 className={styles.Info__Port__Text}></h4>
                        <h3 className={styles.Info__Port__Name}></h3>
                    </div>
                    <div className={styles.Info__Transport}>
                        <h4 className={styles.Info__Transport__Detail}></h4>
                        <h4 className={styles.Info__Transport__Time}></h4>
                    </div>

                </div>
                <div className={styles.Card__Main__Detail}>
                    <div className={styles.Card__Main__Detail__Departure}>
                        <h4 className={styles.Detail__Departure__Date}></h4>
                        <h4 className={styles.Detail__Departure__Time}></h4>
                    </div>
                    <div className={styles.Card__Main__Detail__Icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#273049" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg>
                    </div>
                    <div className={styles.Card__Main__Detail__Arrival}>
                        <h4 className={styles.Detail__Arrival__Date}></h4>
                        <h4 className={styles.Detail__Arrival__Time}></h4>
                    </div>
                </div>
            </div>

            <div className={styles.Card__Footer}>
                <div className={styles.Card__Footer__Info}>
                    <h4 className={styles.Card__Footer__Type}></h4>
                    <h4 className={styles.Card__Footer__Available}></h4>
                </div>
                <div className={styles.Card__Footer__Button}>
                    <h3 className={styles.Card__Footer__Button}>PRENOTA</h3>
                </div>
            </div>

        </div>

}

export default Card;