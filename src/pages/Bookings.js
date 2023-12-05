import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import IntroBookings from "../components/BookinkComponents/IntroBookings";
import ReservationTable from "../components/BookinkComponents/ReservationTable";
import FormBookings from "../components/BookinkComponents/FormBookings";
import Shop from "../components/ShopComponents/Shop";
const Bookings = () => {
  return (
    <div className="bookings-container">
      <Navigation />
      <Shop />
      <IntroBookings />
      <ReservationTable />
      <FormBookings />
      <Footer />
    </div>
  );
};

export default Bookings;
