import { useState } from "react"
import Image from "next/image"
import infoBanner from "@/assets/images/banner.jpeg"
import styles from "./info.module.scss"

const Info = ({data}) => {
    
    
    return <div className={styles.Info}>
            <Image src={infoBanner} width={500} height={500} alt="Hero Image" className={styles.Info__Image}/>
            <div className={styles.Info__Overlay}></div>
            <div className={styles.Data}>
                <div className={styles.Data__Container}>
                    <h2>+20</h2>
                    <h2>Destinazioni</h2>
                </div>
                <div className={styles.Data__Container}>
                    <h2>+15</h2>
                    <h2>Imbarcazioni</h2>
                </div>
                <div className={styles.Data__Container}>
                    <h2>+40</h2>
                    <h2>Itinerari</h2>
                </div>
            </div>
    </div>
}

export default Info; 