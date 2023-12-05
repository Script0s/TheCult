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
        <Route path="https://script0s.github.io/TheCult/" element={<Home />} />
        <Route
          path="https://script0s.github.io/TheCult/menu"
          element={<Menu />}
        />
        <Route
          path="https://script0s.github.io/TheCult/bookings"
          element={<Bookings />}
        />
        <Route
          path="https://script0s.github.io/TheCult/forguests"
          element={<ForGuests />}
        />
        <Route
          path="https://script0s.github.io/TheCult/ourstory"
          element={<OurStory />}
        />
        <Route
          path="https://script0s.github.io/TheCult/none"
          element={<None />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
