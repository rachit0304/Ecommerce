import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import ProductDetails from "../../components/Product/ProductDetails/ProductDetails";
import Product from "../../components/Product/Product/Product";
import Contact from "../Pages/Contact";
import TearmsCondition from "../Pages/TearmsCondition";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import About from "../Pages/About";
import Homepage from "../Pages/HomePage";
import Navigation from "../../components/Navbar/Navigation";
import Cart from "../../components/Cart/Cart";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button} from "@mui/material";
import { customerTheme } from "../../public/customeThem";
import Order from "../../components/orders/Order";
import OrderDetails from "../../components/orders/OrderDetails";
import Checkout from "../../components/Checkout/Checkout";
import PaymentSuccess from "../../components/paymentSuccess/PaymentSuccess";
import RateProduct from "../../components/ReviewProduct/RateProduct";
import NotFound from "../Pages/Notfound"

const CustomerRoutes = () => {
    const location = useLocation();
    
    const showNavigation = location.pathname !== "*";

  return (
    <div>
    
    <ThemeProvider theme={customerTheme}>
    {showNavigation && <Navigation />}
     <Routes>
        <Route path="/login" element={<Homepage />}></Route>
        <Route path="/register" element={<Homepage />}></Route>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/privaciy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/terms-condition" element={<TearmsCondition />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/:lavelOne/:lavelTwo/:lavelThree" element={<Product />}></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route path="/account/order/:orderId" element={<OrderDetails />}></Route>
        <Route path="/account/rate/:productId" element={<RateProduct />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/payment/:orderId" element={<PaymentSuccess />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
      
    </div>
  );
};

export default CustomerRoutes;
