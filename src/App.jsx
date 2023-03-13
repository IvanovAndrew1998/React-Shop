import React, { useEffect } from 'react';
import {
    BrowserRouter, Route, Routes, Link
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Catalogue from './Components/Pages/CataloguePage/Catalogue';
import HomePage from './Components/Pages/HomePage/HomePage';
import ProductPage from "./Components/Pages/ProductPage";
import BasketPage from './Components/Pages/BasketPage/BasketPage';
import AccountPage from './Components/Pages/AccountPage/AccountPage';
import { userStore } from './Store/UserStore.js';
import OrdersPage from './Components/Pages/OrdersPage/OrdersPage';

const accessTokenRefreshTime = 1000 * 60 * 3;



function App() {
    useEffect(
        () => {
            userStore.loadData(); setInterval(() => {
                userStore.loadData()
    
            }, accessTokenRefreshTime)
        },
        []);




    return (
        <div className="App">

            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="product/" element={<ProductPage />}
                    />
                    <Route path='catalogue/' element={<Catalogue />} />
                    <Route path='*' element={<HomePage />} />
                    <Route path='basket/' element={<BasketPage />} />
                    <Route path='profile' element={<AccountPage />} />
                    <Route path='orders/' element={<OrdersPage />} />
                </Routes>
            <Footer />
            </BrowserRouter>


        </div >
    );
}

export default App;
