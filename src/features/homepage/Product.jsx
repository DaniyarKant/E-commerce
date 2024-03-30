import styles from "./Product.module.css";

function Product({ product }) {
    return (
        <div className={styles.productContainer}>
            <div className={styles.productImage}>
                <img src={product.image} alt={product.name} />
            </div>
            <div className={styles.productDescription}>
                <span className={styles.productName}>{product.product_name}</span>
                <span className={styles.productPrice}>${product.price}</span>
            </div>
        </div>
    );
}

export default Product;
