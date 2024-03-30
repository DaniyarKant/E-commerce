import ProductTable from "../features/homepage/ProductTable";
import styles from "./HomePage.module.css";

function HomePage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <ProductTable />
            </div>
        </div>
    );
}

export default HomePage;
