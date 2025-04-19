import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "../pages/home/MainPage";
import NotFound from "../components/not-found/NotFound";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            {/* Обработка неизвестных маршрутов */}
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};

export default AppRoutes;
