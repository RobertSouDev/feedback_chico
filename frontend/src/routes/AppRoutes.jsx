import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackPage from "../pages/FeedbackPage";
import Login from "../pages/Login";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "../components/ProtectedRoute";

export default function AppRoutes(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FeedbackPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/home" 
                        element={ 
                                <ProtectedRoute>
                                    <HomePage />
                                </ProtectedRoute>
                                }/>
                </Routes>
            </BrowserRouter>
        </>
    )
}