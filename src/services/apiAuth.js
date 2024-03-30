import { isRouteErrorResponse } from "react-router-dom";
import supabase from "./supabase";

export async function signup({ name, email, password }) {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            data: {
                name,
            },
        },
    });

    if (error) {
        console.error(error);
        throw new Error("User can not register");
    }

    return data;
}

export async function login({ email, password }) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    if (error) {
        throw new Error(error.message);
    }

    return data;
}

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();

    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) {
        throw new Error(error.message);
    }

    return data;
}
