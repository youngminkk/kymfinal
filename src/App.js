import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomeView from "./views/Home/HomeView.jsx";
import SearchView from "./views/Search/SearchView.jsx";
import InfoView from "./views/Info/InfoView.jsx";
import ProductsView from "./views/Products/ProductsView.jsx";
import LoginView from "./views/Login/LoginView.jsx";


const App = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                    <Route path="/search" element={<SearchView />} />
                    <Route path="/info" element={<InfoView />} />
                    <Route path="/products" element={<ProductsView />} />
                    <Route path="/login" element={<LoginView />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
    
};

export default App;