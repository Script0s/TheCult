import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import setHours from "date-fns/setHours";
import setMinutes from "date-fns/setMinutes";

const TimePickerField = ({ label, selectedTime, onChange, errorMessage }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const handleChange = (time) => {
    onChange({ type: "SET_FIELD", field: "selectedTime", value: time });
  };

  const formattedLabel = label.replace(/&nbsp;/g, " ").toUpperCase();

  return (
    <div className={`input-box ${isFocused || selectedTime ? "focused" : ""}`}>
      <label className="label-datepicker" translate="no">
        {formattedLabel.split("").map((letter, i) => (
          <span key={i} style={{ transitionDelay: `${i * 30}ms` }}>
            {letter}
          </span>
        ))}
      </label>
      <DatePicker
        selected={selectedTime}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={30}
        timeCaption="Time"
        includeTimes={[
          setHours(setMinutes(new Date(), 30), 11),
          setHours(setMinutes(new Date(), 0), 12),
          setHours(setMinutes(new Date(), 30), 12),
          setHours(setMinutes(new Date(), 0), 13),
          setHours(setMinutes(new Date(), 30), 13),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 0), 19),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 0), 20),
          setHours(setMinutes(new Date(), 30), 20),
          setHours(setMinutes(new Date(), 0), 21),
          setHours(setMinutes(new Date(), 30), 21),
        ]}
        dateFormat="hh:mm aa"
        timeFormat="hh:mm aa"
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default TimePickerField;
