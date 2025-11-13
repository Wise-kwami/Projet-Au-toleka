import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";
import Carlist from "./assets/pages/Carlist";
import Details from "./assets/pages/Details";
import Contacts from "./assets/pages/Contacts";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Carlist" element={<Carlist />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Contacts" element={<Contacts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
