import React, { useReducer } from "react";
import InputField from "../FormComponents/InputField";
import DatePickerField from "../FormComponents/DatePickerField";
import TimePickerField from "../FormComponents/TimerPickerField";
import TextareaField from "../FormComponents/TextareaField";
import SelectField from "../FormComponents/SelectField";
import usePopup from "../FormComponents/usePopUp";
import ConfirmationPopup from "../FormComponents/ConfirmationPopUp";
import {
  bookingFormReducer,
  initialBookingState,
} from "../FormComponents/FormReducer";
import {
  validateEmail,
  validateName,
  validatePhone,
  validateDate,
  validateTime,
  validatePartySize,
} from "../FormComponents/ValidationsRules";
import butler from "../../img/BookingsPage/Butler.svg";
import iceCupPink from "../../img/BookingsPage/IceCup-pink.svg";

const FormBookings = () => {
  const [state, dispatch] = useReducer(bookingFormReducer, initialBookingState);
  const { isPopupVisible, showPopup, hidePopup } = usePopup();

  const handleSubmit = (event) => {
    event.preventDefault();
    const nameError = validateName(state.fields.name);
    const phoneError = validatePhone(state.fields.phone);
    const emailError = validateEmail(state.fields.email);
    const guestsError = validatePartySize(state.fields.guests);
    const dateError = validateDate(state.fields.date);
    const timeError = validateTime(state.fields.selectedTime);

    dispatch({ type: "SET_ERROR", field: "name", error: nameError });
    dispatch({ type: "SET_ERROR", field: "phone", error: phoneError });
    dispatch({ type: "SET_ERROR", field: "email", error: emailError });
    dispatch({ type: "SET_ERROR", field: "guests", error: guestsError });
    dispatch({ type: "SET_ERROR", field: "date", error: dateError });
    dispatch({ type: "SET_ERROR", field: "selectedTime", error: timeError });

    const hasErrors = [
      nameError,
      phoneError,
      emailError,
      guestsError,
      dateError,
      timeError,
    ].some((e) => e);
    console.log(hasErrors);
    if (!hasErrors) {
      showPopup();
    }
  };

  return (
    <div className="formBookings-container">
      <div className="form-container">
        <div className="input-container">
          <InputField
            label="Your Name"
            type="text"
            value={state.fields.name}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "name",
                value: e.target.value,
              })
            }
            errorMessage={state.errors.name}
          />
          <InputField
            type="tel"
            label="Your Phone Number"
            value={state.fields.phone}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "phone",
                value: e.target.value,
              })
            }
            errorMessage={state.errors.phone}
          />
          <InputField
            label="Your Email"
            type="email"
            value={state.fields.email}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "email",
                value: e.target.value,
              })
            }
            errorMessage={state.errors.email}
          />
          <SelectField
            label="Party Size"
            value={state.fields.guests}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "guests", value })
            }
            options={Array.from({ length: 20 }, (_, i) => i + 1)}
            errorMessage={state.errors.guests}
          />
          <DatePickerField
            label="Date"
            selectedDate={state.fields.date}
            onChange={(action) => dispatch(action)}
            errorMessage={state.errors.date} // Assurez-vous de passer le message d'erreur du state
          />
          <TimePickerField
            label="Time"
            selectedTime={state.fields.selectedTime}
            onChange={(action) => dispatch(action)}
            errorMessage={state.errors.selectedTime}
          />
          <TextareaField
            label="Notes (Optional)"
            value={state.fields.selectedTextarea}
            onChange={(action) => dispatch(action)} // action est l'objet d'action, pas l'événement
          />
        </div>
        <button
          className="Rect-button confirm-reservation"
          onClick={handleSubmit}
        >
          CONFIRM RESERVATION
        </button>
      </div>
      <img className="ice-cup-pink" src={iceCupPink} alt="Ice Cup" />
      <img className="butler" src={butler} alt="Butler" />
      <ConfirmationPopup isVisible={isPopupVisible} onClose={hidePopup} />
    </div>
  );
};

export default FormBookings;
