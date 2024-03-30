import { useState } from "react";
import SideName from "../../ui/SideName";
import Timer from "../../ui/Timer";
import Product from "./Product";
import styles from "./ProductTable.module.css";
import { useProducts } from "./useProducts";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function ProductTable() {
    const { products, isLoading } = useProducts();
    const [currentIndex, setCurrentIndex] = useState(0);

    if (isLoading) return null;

    const itemsPerPage = 4;

    const startIndex = currentIndex * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const data = products.slice(startIndex, endIndex);

    function onLeft() {
        if (currentIndex === 0) return;
        setCurrentIndex(currentIndex - 1);
    }

    function onRight() {
        const maxIndex = Math.ceil(products.length / itemsPerPage) - 1;
        if (currentIndex === maxIndex) return;
        setCurrentIndex(currentIndex + 1);
    }

    return (
        <div className={styles.productTable}>
            <SideName title="Today’s" />
            <div className={styles.timer}>
                <div className={styles.timer1}>
                    <span className={styles.timerTitle}>Flash Sales</span>
                    <Timer duration={3 * 24 * 60 * 60 * 1000} />
                </div>
                <div>
                    <button className={styles.button1} onClick={onLeft}>
                        <FaArrowLeft />
                    </button>
                    <button className={styles.button2} onClick={onRight}>
                        <FaArrowRight />
                    </button>
                </div>
            </div>
            <div className={styles.product}>
                {data.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductTable;
