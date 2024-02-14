import React from "react";
import './App.css';
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/login"} element={<LoginPage/>}/>
                    <Route path={"/register"} element={<RegisterPage/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
