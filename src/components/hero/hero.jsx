import Image from "next/image"
import styles from "@/components/hero/hero.module.scss"
import heroImage from "@/assets/images/hero.jpeg"

const Hero = () => {
    return <div className={styles.Hero}>
            <Image src={heroImage} width={1000} height={1000} alt="Hero Image" className={styles.Hero__Image}/>
            <div className={styles.Hero__Overlay}></div>
        <h1 className={styles.Hero__Display}>Lorem ipsum dolor sit amet</h1>
    </div>
}

export default Hero; 