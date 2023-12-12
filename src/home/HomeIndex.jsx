import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route, Routes,
    Link
} from "react-router-dom";
import HomeRouter from './HomeRouter';
import HomeHeader from './partial/HomeHeader';

function HomeIndex() {
    const routers = HomeRouter.map((paths) =>
        <Route key={paths.id} path={paths.url} element={paths.element}></Route>);
    return (
        <div>

            <div>

                <Routes>
                    {routers}
                </Routes>

            </div>
        </div>
    );
}

export default HomeIndex;