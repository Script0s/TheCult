import React, { useState, useRef, useEffect } from "react";

const SelectField = ({ label, value, onChange, errorMessage }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Ajoute une option vide suivie de nombres de 1 à 20
  const options = [
    "\u00A0",
    ...Array.from({ length: 20 }, (_, i) => String(i + 1)),
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
    setIsFocused(!isFocused);
  };

  const handleSelect = (option) => {
    // Assurez-vous que la valeur n'est pas un espace insécable si l'option est vide
    const newValue = option !== "\u00A0" ? option : "";
    onChange(newValue);
    setIsOpen(false);
    setIsFocused(false);
  };

  const handleBlur = () => {
    if (!isOpen) {
      setIsFocused(false);
    }
  };

  const formattedLabel = label.replace(/ /g, "\u00A0").toUpperCase();

  return (
    <div
      ref={wrapperRef}
      className={`input-box ${isFocused || value ? "focused" : ""}`}
    >
      <label>
        {formattedLabel.split("").map((letter, index) => (
          <span key={index} style={{ transitionDelay: `${index * 30}ms` }}>
            {letter}
          </span>
        ))}
      </label>
      <div
        className="custom-select-trigger"
        onClick={toggleOpen}
        onBlur={handleBlur}
        tabIndex={0}
      >
        {value}
      </div>
      {isOpen && (
        <div className="custom-options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom-option${value === option ? " selected" : ""}`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
};

export default SelectField;
