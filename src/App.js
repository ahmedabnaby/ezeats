import React from 'react'
import { Navbar } from "./includes/header"
import { Footer } from "./includes/footer"

import { Home } from "./pages/Home"
import { Cart } from "./pages/Cart"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initializeParse } from "@parse/react";

const PARSE_APPLICATION_ID = "0sd4UdqbiTdERtz98fcGvVAGd42B07hpPTSKhg60";
const PARSE_LIVE_QUERY_URL = "https://ezfoodstest.b4a.io/";
const PARSE_JAVASCRIPT_KEY = "oWoRhT2s7mkuPHezfUoht2H7yp1uoGGbKWe65pVP";

initializeParse(
    PARSE_LIVE_QUERY_URL,
    PARSE_APPLICATION_ID,
    PARSE_JAVASCRIPT_KEY
);
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" name="Home" index element={<Home />} />
          <Route exact path="/cart" name="Cart" element={<Cart />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
