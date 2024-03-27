import SignUpSide from "../../ui/SignUpSide";
import styles from "./SignUpForm.module.css";

function SignUpForm() {
    return (
        <div className={styles.container}>
            <SignUpSide />
        </div>
    );
}

export default SignUpForm;
