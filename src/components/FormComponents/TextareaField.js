import React from "react";

const TextareaField = ({ label, value, onChange }) => {
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => {
    setIsFocused(false);
    // Ici, vous pouvez ajouter une validation ou un traitement d'erreur si nécessaire
  };
  const handleChange = (e) => {
    onChange({
      type: "SET_FIELD",
      field: "selectedTextarea",
      value: e.target.value,
    });
  };

  const formattedLabel = label.replace(/ /g, "\u00A0").toUpperCase();

  return (
    <div className={`textarea-box ${isFocused || value ? "focused" : ""}`}>
      <label>
        {formattedLabel.split("").map((letter, i) => (
          <span key={i} style={{ transitionDelay: `${i * 30}ms` }}>
            {letter}
          </span>
        ))}
      </label>
      <textarea
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        rows="8"
      />
    </div>
  );
};

export default TextareaField;
