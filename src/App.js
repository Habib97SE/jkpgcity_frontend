import React from "react";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Venues from "./pages/Venues";
import News from "./pages/News";
import SingleNews from "./pages/SingleNews";
import Profile from "./pages/Profile";
import AdminLayout from "./components/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminUsers from "./pages/admin/Users";
import AdminVenues from "./pages/admin/Venues";
import NewUser from "./pages/admin/NewUser";
import NewVenue from "./pages/admin/NewVenue";
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
                    <Route path={"/profile"} element={<Profile/>}/>
                    <Route path={"/admin"} element={<h1>Admin</h1>}/>
                </Route>
                <Route path="/admin" element={<AdminLayout/>}>
                    <Route index element={<Dashboard />}/>
                    <Route path={"users"} element={<AdminUsers/>}/>
                    <Route path={"users/new"} element={<NewUser/>}/>
                    <Route path={"venues"} element={<AdminVenues/>}/>
                    <Route path={"venues/new"} element={<NewVenue/>}/>
                </Route>
                <Route path={"*"} element={<h1>Not Found</h1>}/>{/* 404 page */}
            </Routes>
        </Router>
    );
}

export default App;
