import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "../pages/home";
import Login from "../pages/login";
import ErrorPage from "../pages/ErrorPage";
import AuthProvider from '../context/AuthProvider';
import ProtectedRoute from "./ProtectedRoute";

const AuthLayout = () => {
    return (
    <AuthProvider>
        <Outlet /> 
    </AuthProvider>
    );
};
export default createBrowserRouter([{
    element: <AuthLayout />,
    errorElement: <ErrorPage />,
    children: [
        { 
            element: <Login />,
            path: '/login',
        },
        {
            element: <ProtectedRoute />,
            children: [
                {
                    element: <Home />,
                    path: '/'
                }
            ]
        } 
        
    ],
}])