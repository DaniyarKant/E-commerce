import { useNavigate } from "react-router-dom";
import Button from "./Button";
import styles from "./PageNotFound.module.css";

function PageNotFound() {
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <div className={styles.title}>404 Not Found</div>
            <div className={styles.description}>Your visited page not found. You may go home page.</div>
            <Button title="Back to home page" width={254} height={56} onClick={() => navigate("/homepage")} />
        </div>
    );
}

export default PageNotFound;
