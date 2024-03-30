import styles from "./SideName.module.css";

function SideName({ title }) {
    return (
        <div className={styles.container}>
            <div className={styles.box}></div>
            <span>{title}</span>
        </div>
    );
}

export default SideName;
