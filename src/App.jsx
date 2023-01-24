import React, { useEffect } from 'react';
import {
    BrowserRouter, Route, Routes
} from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Catalogue from './Components/Pages/CataloguePage/Catalogue';
import HomePage from './Components/Pages/HomePage/HomePage';
import ProductPage from "./Components/Pages/ProductPage";
import Loader from './Components/Pages/ProductPage/Loader/Loader';
import BasketPage from './Components/Pages/BasketPage/BasketPage';
import AccountPage from './Components/Pages/AccountPage/AccountPage';



function App() {



    return (
        <div className="App">

            <Header />
            <BrowserRouter>
                <Routes>
                    <Route path="product/" element={<ProductPage />}
                    />
                    <Route index path='catalogue/' element={<Catalogue/>}/>
                    <Route path='*' element={<HomePage/>}/>
                    <Route path='basket/' element={<BasketPage/>}/>
                    <Route path='profile' element={<AccountPage/>} />
                </Routes>
            </BrowserRouter>

            <Footer />
          
        </div >
    );
}

export default App;
