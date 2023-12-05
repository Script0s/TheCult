import React from "react";
import CheckIcon from "../../img/HomePage/Footer/NarutoPink.svg"; // Assurez-vous que le chemin est correct

const ConfirmationPopup = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          X
        </button>
        <img className="check-icon" src={CheckIcon} alt="Checkmark" />
        <p>Thank you for your interest but . . .</p>
      </div>
    </div>
  );
};

export default ConfirmationPopup;
