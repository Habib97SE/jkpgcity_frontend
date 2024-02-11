import './App.css';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/register" element={<RegisterPage/>}/>
                <Route path={"/login"} element={<LoginPage/>}/>
            </Routes>
        </Router>
    );
}

export default App;
