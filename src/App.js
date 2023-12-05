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
        <Route path="/thecult" element={<Home />} />
        <Route path="/thecult/menu" element={<Menu />} />
        <Route path="/thecult/bookings" element={<Bookings />} />
        <Route path="/thecult/forguests" element={<ForGuests />} />
        <Route path="/thecult/ourstory" element={<OurStory />} />
        <Route path="/thecult/none" element={<None />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
