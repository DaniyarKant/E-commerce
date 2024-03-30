import { useMutation } from "@tanstack/react-query";
import { signup as signApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useSignup() {
    const navigate = useNavigate();

    const { mutate: signup, isLoading } = useMutation({
        mutationFn: signApi,
        onSuccess: () => {
            navigate("/login-in");
        },
    });

    return { signup, isLoading };
}
