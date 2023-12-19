import React, { useState } from "react";

const InputField = ({
  label,
  type = "text",
  value,
  onChange,
  errorMessage,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (e) => {
    onChange(e);
  };

  const formattedLabel = label.replace(/ /g, "\u00A0").toUpperCase();

  return (
    <div className={`input-box ${isFocused || value !== "" ? "focused" : ""}`}>
      <label translate="no">
        {formattedLabel.split("").map((letter, index) => (
          <span key={index} style={{ transitionDelay: `${index * 30}ms` }}>
            {letter}
          </span>
        ))}
      </label>
      <input
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default InputField;
