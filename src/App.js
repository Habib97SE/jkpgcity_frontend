import React from "react";
import './App.css';
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Venues from "./pages/Venues";
import News from "./pages/News";
import SingleNews from "./pages/SingleNews";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout/>}>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/news"} element={<News/>}/>
                    <Route path={"/news/:id"} element={<SingleNews/>}/>
                    <Route path={"/login"} element={<Login/>}/>
                    <Route path={"/register"} element={<Register/>}/>
                    <Route path={"/venues"} element={<Venues/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
