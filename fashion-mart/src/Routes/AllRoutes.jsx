import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home";
import WomenProductPage from "../ProductPages/WomenProductPage";
import MenProductPage from "../ProductPages/MenProductPage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/WomenProductPage" element={<WomenProductPage />} />
                <Route path="/MenProductPage" element={<MenProductPage />} />
                <Route path="/SignUpPage" element={<SignUpPage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
            </Routes>
        </div>
    )

}
export default AllRoutes;