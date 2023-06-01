import React from "react";
import { Pagecontext } from "/src/Context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/Home/Home";
import Analysis from "./page/Analysis/Analysis";
import Reserve from "./page/Reserve/Reserve";
import ASupport from "./page/support/ASupport";
import Server from "./page/server/Server";

import Product from "/src/page/product/Product";
import Admin from "./page/admin/Admin";
import Addimg from "./page/addimg/Addimg";

import Observer from "./page/Observer/Observer";
import { useState } from "react";
import Header from "./header/Header";

export default function App() {
  const [page, setPage] = useState("Products");

  const [mycart, setMycart] = useState([]);

  return (
    <div className="App">
      <Pagecontext.Provider value={{ page, setPage, mycart, setMycart }}>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/Admin" element={<Admin />} />
            <Route exact path="/Addimg" element={<Addimg />} />

            <Route path="/products/:productId" element={<Product />} />
            <Route exact path="/Analysis" element={<Analysis />} />
            <Route path="/" element={<Home />} />
            <Route path="/Support" element={<ASupport />} />
            <Route path="/Server" element={<Server />} />

            <Route path="/Reserve" element={<Reserve />} />
            <Route path="/observer" element={<Observer />} />
          </Routes>
        </Router>
      </Pagecontext.Provider>
    </div>
  );
}
