import styles from "./Button.module.css";

function Button({ title, width, height, onClick }) {
    return (
        <button
            className={styles.buttonStyles}
            style={{ width: `${width}px`, height: `${height}px` }}
            onClick={onClick}
        >
            {title}
        </button>
    );
}

export default Button;
