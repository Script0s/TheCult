import React from "react";
import hiyori from "../../img/BookingsPage/Hiyori-iki.svg";
import drinkPink from "../../img/BookingsPage/Drink-pink.svg";

const ReservationTable = () => {
  return (
    <div className="reservationTable-container">
      <h1>
        RESERVATION YOUR
        <br />
        TABLE AT THE CULT
      </h1>
      <p className="info-1">
        We take reservations for groups of any size. You are very welcome to
        come along as a walk-in and we get you seated as quickly as possible,
        but at busy times there may be a wait.
      </p>
      <p className="info-2">
        We have long tables so our customers can meet, exchange thoughts and
        make new friends!
      </p>
      <img className="hiyori" src={hiyori} alt="" />
      <img className="drink-pink" src={drinkPink} alt="" />
    </div>
  );
};

export default ReservationTable;
