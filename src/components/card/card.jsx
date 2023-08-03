import styles from "./card.module.scss";

const Card = ({data}) => {
    console.log(data)


let x = [
  {
    "id": "61a52052759e7f71d786",
    "code": "8142-90724",
    "title": "Isole Egadi",
    "departure": {
      "portCode": "FVG",
      "countryCode": "IT",
      "Port": "Favignana"
    },
    "arrival": {
      "portCode": "FVG",
      "countryCode": "IT",
    "Port": "Favignana"
},
"budget": {

  "costType": "per cabina"
},
"itinerary": [
  {
    "portCode": "LVN",
    "countryCode": "IT",
    "Port": "Levanzo"
  },
  {
    "portCode": "MRT",
    "countryCode": "IT",
    "Port": "Marettimo"
  }
],
"numberOfDays": 3,
"reservationsAvailable": 2,
"reservations": 4,
"reservationsType": "cabina",
"boatType": "Barca a vela",
"departureDate": "2023-08-07 7:50:00",
"arrivalDate": "2023-08-09 15:00:00"
}]

    return <div className={styles.Card}>

            <div className={styles.Card__Header}>
                <div className={styles.Card__Header__Detail}>
                    <h3 className={styles.Card__Header__Detail__Price}>{data.budget.value}{data.budget.currencyCode}</h3>
                    <h5 className={styles.Card__Header__Detail__Info}>{data.budget.costType}</h5>
                </div>
                <div className={styles.Card__Header__Title}>
                    <h2 className={styles.Card__Header__Title__Text}>{data.title}</h2>
                </div>
            </div>
            <div className={styles.Card__Main}>
                <div className={styles.Card__Main__Info}>
                    <div className={styles.Info__Port}>
                        <h4 className={styles.Info__Port__Text}>PARTENZA DA</h4>
                        <h3 className={styles.Info__Port__Name}>{data.departure.Port}</h3>
                    </div>
                    <div className={styles.Info__Transport}>
                        <h4 className={styles.Info__Transport__Detail}>{data.boatType}</h4>
                        <h4 className={styles.Info__Transport__Time}>{data.numberOfDays} giorni</h4>
                    </div>

                </div>
                <div className={styles.Card__Main__Detail}>
                    <div className={styles.Card__Main__Detail__Departure}>
                        <h4 className={styles.Detail__Departure__Date}>{data.departureDate.slice(0, 9)}</h4>
                        <h4 className={styles.Detail__Departure__Time}>{data.departureDate.slice(10)}</h4>
                    </div>
                    <div className={styles.Card__Main__Detail__Icon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="#273049" d="m11.293 17.293l1.414 1.414L19.414 12l-6.707-6.707l-1.414 1.414L15.586 11H6v2h9.586z"/></svg>
                    </div>
                    <div className={styles.Card__Main__Detail__Arrival}>
                        <h4 className={styles.Detail__Arrival__Date}>{data.arrivalDate.slice(0, 11)}</h4>
                        <h4 className={styles.Detail__Arrival__Time}>{data.arrivalDate.slice(11)}</h4>
                    </div>
                </div>
            </div>

            <div className={styles.Card__Footer}>
                <div className={styles.Card__Footer__Info}>
                    <h4 className={styles.Card__Footer__Type}>Cabine {data.reservations}</h4>
                    <h4 className={styles.Card__Footer__Available}>Disponibilità: {data.reservationsAvailable}</h4>
                </div>
                <div className={styles.Card__Footer__Button}>
                    <h3 className={styles.Card__Footer__Button}>PRENOTA</h3>
                </div>
            </div>

        </div>

}

export default Card;