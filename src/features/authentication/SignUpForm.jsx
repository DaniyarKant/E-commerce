import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import SignUpSide from "../../ui/SignUpSide";
import styles from "./SignUpForm.module.css";
import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignUpForm() {
    const { signup, isLoading } = useSignup();
    const { register, handleSubmit, formState, reset } = useForm();
    const { errors } = formState;

    function onSubmit({ name, email, password }) {
        signup({ name, email, password }, { onSettled: reset });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container}>
                <SignUpSide />

                <div className={styles.registrationForm}>
                    <div className={styles.registrationTitle}>
                        <h2>Create an account</h2>
                        <span>Enter your details bellow</span>
                    </div>

                    <div>
                        <input
                            placeholder="Name"
                            type="text"
                            className={styles.inputStyles}
                            {...register("name", { required: "This field is required" })}
                        />
                        {errors?.name && <div>{errors?.name.message}</div>}
                        <input
                            placeholder="Email"
                            type="text"
                            className={styles.inputStyles}
                            {...register("email", {
                                required: "This field is required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Please provide a valid email address",
                                },
                            })}
                        />
                        {errors?.email && <div>{errors?.email.message}</div>}
                        <input
                            placeholder="Password"
                            type="password"
                            className={styles.inputStyles}
                            {...register("password", {
                                required: "This field is required",
                                minLength: { value: 8, message: "Password needs a minimum of 8 characters" },
                            })}
                        />
                        {errors?.password && <div>{errors?.password.message}</div>}
                    </div>

                    <div>
                        <Button title="Create account" width={371} height={56} disabled={isLoading} />
                    </div>

                    <div className={styles.registrationAccounExist}>
                        <span>
                            Already have account? <Link to="/login-in">Log in</Link>
                        </span>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default SignUpForm;
