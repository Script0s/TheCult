import React, { useReducer } from "react";
import InputField from "../FormComponents/InputField";
import {
  deliveryFormReducer,
  initialDeliveryState,
} from "../FormComponents/FormReducer";
import usePopup from "../FormComponents/usePopUp";
import ConfirmationPopup from "../FormComponents/ConfirmationPopUp";
import {
  validateDeliveryMethod,
  validateEmail,
  validateName,
  validatePhone,
  validateMinimumOrderAmount,
  validateMinimumQuantity,
} from "../FormComponents/ValidationsRules";
import { useCart } from "./CartContext";

const FormDelivery = () => {
  const [state, dispatch] = useReducer(
    deliveryFormReducer,
    initialDeliveryState
  );
  const { isPopupVisible, showPopup, hidePopup } = usePopup();
  const { calculateSubtotal, cartItems, resetCart } = useCart();

  // Coût de la livraison
  const ninjaDeliveryCost = 2.9;

  // Fonction pour calculer le coût total
  const calculateTotal = (deliveryMethod) => {
    const subtotal = parseFloat(calculateSubtotal());
    if (deliveryMethod === "Ninja Delivery") {
      return (subtotal + ninjaDeliveryCost).toFixed(2);
    } else {
      return subtotal.toFixed(2);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    const nameError = validateName(state.fields.name);
    const emailError = validateEmail(state.fields.email);
    const phoneError = validatePhone(state.fields.phone);
    const deliveryMethodError = validateDeliveryMethod(
      state.fields.deliveryMethod
    );
    const subtotal = parseFloat(calculateSubtotal());
    const minimumOrderAmountError = validateMinimumOrderAmount(subtotal);
    const minimumQuantityError = validateMinimumQuantity(cartItems);

    // Mise à jour des erreurs dans l'état
    dispatch({ type: "SET_ERROR", field: "name", error: nameError });
    dispatch({ type: "SET_ERROR", field: "email", error: emailError });
    dispatch({ type: "SET_ERROR", field: "phone", error: phoneError });
    dispatch({
      type: "SET_ERROR",
      field: "deliveryMethod",
      error: deliveryMethodError,
    });
    dispatch({
      type: "SET_ERROR",
      field: "minimumOrderAmount",
      error: minimumOrderAmountError,
    });
    dispatch({
      type: "SET_ERROR",
      field: "minimumQuantity",
      error: minimumQuantityError,
    });

    // Vérification de l'existence d'erreurs
    const hasErrors = [
      nameError,
      emailError,
      phoneError,
      deliveryMethodError,
      minimumOrderAmountError,
      minimumQuantityError,
    ].some((error) => error !== "");

    if (!hasErrors) {
      showPopup();
      setTimeout(() => {
        resetCart();
      }, 2000);
    }
  };

  return (
    <form className="FormDelivery" onSubmit={handleSubmit}>
      <InputField
        label="Your Name"
        value={state.fields.name}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "name", value: e.target.value })
        }
        errorMessage={state.errors.name}
      />
      <InputField
        label="Your Email"
        value={state.fields.email}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "email", value: e.target.value })
        }
        errorMessage={state.errors.email}
      />
      <InputField
        label="Your Phone"
        value={state.fields.phone}
        onChange={(e) =>
          dispatch({ type: "SET_FIELD", field: "phone", value: e.target.value })
        }
        errorMessage={state.errors.phone}
      />

      {/* Section Radio Buttons pour le mode de livraison */}
      <div className="radio-container">
        <h3>Your Delivery</h3>
        <label className="custom-radio-button">
          <input
            type="radio"
            name="deliveryMethod"
            value="Ninja Delivery"
            checked={state.fields.deliveryMethod === "Ninja Delivery"}
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "deliveryMethod",
                value: e.target.value,
              })
            }
          />
          Ninja Delivery
        </label>
        <label className="custom-radio-button">
          <input
            type="radio"
            name="deliveryMethod"
            value="Self-delivery from Hidden Village"
            checked={
              state.fields.deliveryMethod ===
              "Self-delivery from Hidden Village"
            }
            onChange={(e) =>
              dispatch({
                type: "SET_FIELD",
                field: "deliveryMethod",
                value: e.target.value,
              })
            }
          />
          Self-delivery from Hidden Village
        </label>
        {state.errors.deliveryMethod && (
          <div className="error-message">{state.errors.deliveryMethod}</div>
        )}
      </div>

      <div className="order-summary">
        <p translate="no">Subtotal: €{calculateSubtotal()}</p>
        {state.fields.deliveryMethod === "Ninja Delivery" && (
          <p translate="no">Ninja Delivery: €{ninjaDeliveryCost}</p>
        )}
        <p translate="no">
          Total: €{calculateTotal(state.fields.deliveryMethod)}
        </p>

        {state.errors.minimumOrderAmount && (
          <div className="error-message">{state.errors.minimumOrderAmount}</div>
        )}
        {state.errors.minimumQuantity && (
          <div className="error-message">{state.errors.minimumQuantity}</div>
        )}
      </div>

      <button type="submit" className="Rect-button submit-sidebar">
        CHECKOUT
      </button>

      <ConfirmationPopup isVisible={isPopupVisible} onClose={hidePopup} />
    </form>
  );
};

export default FormDelivery;
