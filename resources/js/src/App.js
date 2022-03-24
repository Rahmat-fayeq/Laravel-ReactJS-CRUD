import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Add from "./components/Add";
import Edit from "./components/Edit";

const App = () => {
    useEffect(() => {}, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/add" element={<Add />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </BrowserRouter>
    );
};

ReactDOM.render(<App />, document.getElementById("app"));
