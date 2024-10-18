import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackPage from "../pages/FeedbackPage";
import Login from "../pages/Login";

export default function AppRoutes(){
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<FeedbackPage/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}