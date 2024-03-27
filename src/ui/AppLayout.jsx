import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.css";

import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default AppLayout;
