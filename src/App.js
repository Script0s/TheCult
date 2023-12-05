import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Bookings from "./pages/Bookings";
import ForGuests from "./pages/ForGuests";
import OurStory from "./pages/OurStory";
import None from "./pages/None";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/forguests" element={<ForGuests />} />
        <Route path="/ourstory" element={<OurStory />} />
        <Route path="/none" element={<None />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
