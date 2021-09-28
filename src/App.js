import React from 'react';
import { Nav } from './Component/Nav';
import Home from './Component/Pages/Home';
import Products from './Component/Pages/Products';
import Footer from './Component/Footer';
import ProductsDetail from './Component/Pages/ProductsDetail';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CartDetails from './Component/Pages/CartDetails';

const App = () => {
    return ( <
        >
        { /* <Products/> */ } <
        Router >
        <
        Nav / >
        <
        Routes >
        <
        Route path = "/"
        element = { < Home / > }
        />  <
        Route path = "/products"
        element = { < Products / > }
        />  <
        Route path = "products/:product_code"
        element = { < ProductsDetail / > }
        />  <
        Route path = "/cart"
        element = { < CartDetails / > }
        />  

        /
        >
        <
        Route path = "*"
        element = { < NoMatch / > }
        />  

        <
        /Routes>  <
        Footer / >
        <
        /Router>  < / >
    )
}

export default App

function NoMatch() {
    let location = useLocation();
    return ( <
        div >
        <
        h3 >
        Error 404 Page is not avalible right now

        <
        /h3> <
        /div>
    )
}