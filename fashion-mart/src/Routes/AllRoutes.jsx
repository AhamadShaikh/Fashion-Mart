import { Routes, Route } from "react-router-dom"
import Home from "../Pages/Home";
import WomenProductPage from "../ProductPages/WomenProductPage";
import MenProductPage from "../ProductPages/MenProductPage";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import SingleProductPage from "../Pages/SingleProductPage";
import PrivateRoute from "./PrivateRoute";
import CartPage from "../Pages/CartPage";
import AddressPage from "../Pages/AddressPage";
import PaymentPage from "../Pages/PaymentPage";
import RecieptPage from "../Pages/RecieptPage"
function AllRoutes() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/WomenProductPage" element={<WomenProductPage />} />
                <Route path="/MenProductPage" element={<MenProductPage />} />
                <Route path="/SignUpPage" element={<SignUpPage />} />
                <Route path="/LoginPage" element={<LoginPage />} />
                <Route path="/SingleProductPage/:id" element={<PrivateRoute><SingleProductPage /></PrivateRoute>} />
                <Route path="/CartPage" element={<CartPage />} />
                <Route path="/AddressPage" element={<AddressPage />} />
                <Route path="/PaymentPage" element={<PaymentPage />} />
                <Route path="/RecieptPage" element={<RecieptPage />} />
            </Routes>
        </div>
    )

}
export default AllRoutes;