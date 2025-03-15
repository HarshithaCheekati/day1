import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";

const Home = () => <h1>Welcome to Event Management App</h1>; // Temporary home page

const App = () => {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} /> {/* ✅ Ensure this route exists */}
                </Routes>
            </Router>
        </AuthProvider>
    );
};

export default App;




