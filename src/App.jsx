import React from "react";
import Home from "./pages/Home/Home.jsx";
import Visual from "./pages/Visual/Visual.jsx"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Visual/:hash" element={<Visual />} />
            </Routes>
        </Router>
    );
}

export default App;