import styles from "./button.module.scss"

const Button = ({ text }) => {
    return <div className={styles.Button}>
            <p className={styles.Button__Text}>{text}</p>
        </div>
}

export default Button;