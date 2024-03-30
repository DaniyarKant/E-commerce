import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import HomePage from "./pages/HomePage";
import SignUp from "./pages/SignUp";
import LoginIn from "./pages/LoginIn";
import PageNotFound from "./ui/PageNotFound";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 + 1000,
        },
    },
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
            <BrowserRouter>
                <Routes>
                    <Route element={<AppLayout />}>
                        <Route index element={<Navigate replace to="homepage" />} />
                        <Route path="homepage" element={<HomePage />} />
                        <Route path="sign-up" element={<SignUp />} />
                        <Route path="login-in" element={<LoginIn />} />
                        <Route path="*" element={<PageNotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
