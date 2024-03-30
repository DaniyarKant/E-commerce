import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import styles from "./Header.module.css";

function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.discount}>
                <div className={styles.discountText}>
                    <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
                    <Link>ShopNow</Link>
                </div>
            </div>

            <div className={styles.navigation}>
                <div className={styles.logo}>Exclusive</div>
                <div>
                    <ul className={styles.links}>
                        <li>
                            <Link to="/homepage">Home</Link>
                        </li>
                        <li>Contact</li>
                        <li>About</li>
                        <li>
                            <Link to="/sign-up">Sign up</Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.navigationChildren}>
                    <input placeholder="What are looking for" className={styles.navigationSearch} />
                    <FaRegHeart className={styles.nagivationIcons} />
                    <FiShoppingCart className={styles.nagivationIcons} />
                </div>
            </div>

            <div className={styles.line}></div>
        </div>
    );
}

export default Header;
