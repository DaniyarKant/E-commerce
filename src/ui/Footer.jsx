import styles from "./Footer.module.css";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <ul>
                        <li>
                            <span>Exclusive</span>
                        </li>
                        <li>Subscribe</li>
                        <li>Get 10% off your first order</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Support</span>
                        </li>
                        <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
                        <li>exclusive@gmail.com</li>
                        <li>+88015-88888-9999</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Account</span>
                        </li>
                        <li>My Account</li>
                        <li>Login / Register</li>
                        <li>Cart</li>
                        <li>Wishlist</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>
                            <span>Quick Link</span>
                        </li>
                        <li>Privacy Policy</li>
                        <li>Terms Of Use</li>
                        <li>FAQ</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
