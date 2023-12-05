import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DatePickerField = ({ label, selectedDate, onChange, errorMessage }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    // Vous pouvez également effectuer une validation ici si nécessaire.
    // Par exemple : if (!selectedDate) onChange({ type: "SET_ERROR", field: "date", error: "Date is required" });
  };
  const handleChange = (date) => {
    onChange({ type: "SET_FIELD", field: "date", value: date });
    // Vous pouvez aussi valider ici et dispatcher une action d'erreur si nécessaire.
  };

  const formattedLabel = label.replace(/&nbsp;/g, " ").toUpperCase();

  return (
    <div className={`input-box ${isFocused || selectedDate ? "focused" : ""}`}>
      <label className="label-datepicker">
        {formattedLabel.split("").map((letter, i) => (
          <span key={i} style={{ transitionDelay: `${i * 30}ms` }}>
            {letter}
          </span>
        ))}
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        minDate={new Date()}
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default DatePickerField;
