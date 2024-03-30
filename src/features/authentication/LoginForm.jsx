import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import SignUpSide from "../../ui/SignUpSide";
import styles from "./LoginForm.module.css";
import { useLogin } from "./useLogin";

function LoginForm() {
    const { login, isLoading } = useLogin();
    const { register, handleSubmit, reset } = useForm();

    function onSubmit({ email, password }) {
        login({ email, password }, { onSettled: reset });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <SignUpSide />
                <div className={styles.loginForm}>
                    <div className={styles.loginTitle}>
                        <h2>Log in to Exclusive</h2>
                        <span>Enter your details bellow</span>
                    </div>
                    <div>
                        <input
                            placeholder="Email"
                            className={styles.inputStyles}
                            {...register("email", { required: "This field is required" })}
                        />
                        <input
                            placeholder="Password"
                            className={styles.inputStyles}
                            type="password"
                            {...register("password", { required: "This field is required" })}
                        />
                    </div>

                    <div>
                        <Button title="Login in" width={143} height={56} disabled={isLoading} />
                    </div>
                </div>
            </div>
        </form>
    );
}

export default LoginForm;
