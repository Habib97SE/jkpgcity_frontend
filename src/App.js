import React from "react";
import Layout from "./components/Layout";
import AdminLayout from "./components/AdminLayout";
import { ShowVenueCategories, EditVenueCategory, NewVenueCategory, CalendarPage, EditUser, EditVenue, EditNews, NewNews, About, Home, News, SingleNews, Login, Register, Venues, Profile, Dashboard, AdminUsers, NewUser, AdminVenues, NewVenue, NewsPage } from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route path={"/news"} element={<News />} />
                    <Route path={"/news/:id"} element={<SingleNews />} />

                    <Route path={"/login"} element={<Login />} />
                    <Route path={"/register"} element={<Register />} />

                    <Route path={"/venues"} element={<Venues />} />
                    <Route path={"/profile"} element={<Profile />} />
                    <Route path={"/about"} element={<About />} />
                </Route>
                <Route path="/admin" element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                    <Route path={"calendar"} element={<CalendarPage />} />

                    <Route path={"users"} element={<AdminUsers />} />
                    <Route path={"users/new"} element={<NewUser />} />
                    <Route path={"users/:id"} element={<EditUser />} />

                    <Route path={"venues"} element={<AdminVenues />} />
                    <Route path={"venues/new"} element={<NewVenue />} />
                    <Route path={"venues/:id"} element={<EditVenue />} />
                    <Route path={"venues/categories/new"} element={<NewVenueCategory />} />
                    <Route path={"venues/categories/:id"} element={<EditVenueCategory />} />
                    <Route path={"venues/categories"} element={<ShowVenueCategories />} />

                    <Route path={"news"} element={<NewsPage />} />
                    <Route path={"news/new"} element={<NewNews />} />
                    <Route path={"news/:id"} element={<EditNews />} />

                </Route>
                <Route path={"*"} element={<h1>Not Found</h1>} />{/* 404 page */}
            </Routes>
        </Router>
    );
}

export default App;
