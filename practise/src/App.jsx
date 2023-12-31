import { useContext, useState } from "react";
import Create from "./components/Create";
import Show from "./components/Show";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Details from "./components/Details";
import { ProductContext } from "./utils/Context.jsx";
import Edit from "./components/Edit.jsx";
import Product from "./components/Product"
const App = () => {
    const x = useContext(ProductContext);
    console.log(x);
    return (
        <>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Create />} />
                <Route path="/show" element={<Show />}>
                    <Route path="/show/:dt" element={<Details />} />
                </Route>
                <Route path="/show/edit/:title" element={<Edit />} />
                <Route path="/products" element={<Product />} />

            </Routes>
        </>
    );
};

export default App;