import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

function Timer({ duration }) {
    const [time, setTime] = useState(duration);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1000);
        }, 1000);
    }, [time]);

    function getFormattedTime(milliseconds) {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000));
        let total_minutes = parseInt(Math.floor(total_seconds / 60));
        let total_hours = parseInt(Math.floor(total_minutes / 60));
        let days = parseInt(Math.floor(total_hours / 24));

        let second = parseInt(total_seconds % 60);
        let minutes = parseInt(total_minutes % 60);
        let hours = parseInt(total_hours % 24);

        return `${days} : ${hours} : ${minutes} : ${second}`;
    }

    return <div className={styles.timerSize}>{getFormattedTime(time)}</div>;
}

export default Timer;
