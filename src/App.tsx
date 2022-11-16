import React from 'react';
import style from './index.module.css'


import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import {News} from "./pages/News";
import {MainPage} from "./pages/MainPage";
import {Header} from "./components/Header/Header";



function App() {
    return (
        <div className={style['app-wrapper']}>
        <Header/>
        <Router>
            <Switch>
                <Route path="/mainPage">
                    <MainPage/>
                </Route>
                <Route path="/news/:id">
                    <News/>
                </Route>
                <Route path="/">
                    <MainPage/>
                </Route>
            </Switch>
        </Router>
        </div>

    );
}

export default App;
