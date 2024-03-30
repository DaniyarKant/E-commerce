import supabase from "./supabase";

export async function getProducts() {
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
        throw new Error("Products can not be found");
    }

    return data;
}
