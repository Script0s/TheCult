import React, { useReducer } from "react";
import InputField from "../FormComponents/InputField";
import ConfirmationPopup from "../FormComponents/ConfirmationPopUp";
import usePopup from "../FormComponents/usePopUp";
import {
  homeFormReducer,
  initialHomeState,
} from "../FormComponents/FormReducer";
import {
  validateEmail,
  validateName,
} from "../FormComponents/ValidationsRules";
import Deku from "../../img/HomePage/FormHomePage/Deku.svg";
import Miyamizu from "../../img/HomePage/FormHomePage/Miyamizu.svg";

const FormHomePage = () => {
  const [state, dispatch] = useReducer(homeFormReducer, initialHomeState);
  const { isPopupVisible, showPopup, hidePopup } = usePopup();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Valider chaque champ en utilisant le validateur approprié
    const emailError = validateEmail(state.fields.email);
    const nameError = validateName(state.fields.name);

    // Dispatch d'une action pour chaque erreur
    dispatch({ type: "SET_ERROR", errorField: "email", error: emailError });
    dispatch({ type: "SET_ERROR", errorField: "name", error: nameError });

    // S'il n'y a pas d'erreurs, affichez la popup
    if (!emailError && !nameError) {
      showPopup();
    }
  };

  return (
    <div className="form-img-container">
      <ConfirmationPopup isVisible={isPopupVisible} onClose={hidePopup} />
      <img className="Miyamizu" src={Miyamizu} alt="Miyamizu" />
      <div className="input-title-container">
        <h2>JOIN OUR CULT CLAN AND GET ALL THE LATEST NEWS & UPDATES</h2>
        <form
          className="form-home-container"
          onSubmit={handleSubmit}
          noValidate
        >
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
          <button className="Rect-button joinUs" type="submit">
            JOIN US
          </button>
        </form>
      </div>
      <img className="Deku" src={Deku} alt="Deku" />
    </div>
  );
};

export default FormHomePage;
