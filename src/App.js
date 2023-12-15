import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomeView from "./views/HomeView";


const App = () => {
    return (
        <BrowserRouter>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<HomeView />} />
                </Routes>
            </MainLayout>
        </BrowserRouter>
    );
};

export default App;