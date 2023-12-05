export const initialBookingState = {
  fields: {
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: null,
    selectedTime: null,
    selectedTextarea: "",
  },
  errors: {
    name: "",
    phone: "",
    email: "",
    guests: "",
    date: "",
    selectedTime: "",
  },
};

export function bookingFormReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "RESET":
      return initialBookingState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

// homeFormReducer.js
export const initialHomeState = {
  fields: {
    email: "",
    name: "",
  },
  errors: {},
  isPopupVisible: false,
};

export function homeFormReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.errorField]: action.error },
      };
    case "SHOW_POPUP":
      return { ...state, isPopupVisible: true };
    case "RESET_FORM":
      return initialHomeState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const initialDeliveryState = {
  fields: {
    name: "",
    email: "",
    phone: "",
    deliveryMethod: "",
  },
  errors: {
    name: "",
    email: "",
    phone: "",
    deliveryMethod: "",
    quantityError: "",
    orderAmountError: "",
  },
};

export function deliveryFormReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        fields: { ...state.fields, [action.field]: action.value },
      };
    case "SET_ERROR":
      return {
        ...state,
        errors: { ...state.errors, [action.field]: action.error },
      };
    case "SET_QUANTITY_ERROR": // Nouvelle action pour l'erreur de quantité minimale
      return {
        ...state,
        errors: { ...state.errors, quantityError: action.error },
      };
    case "SET_ORDER_AMOUNT_ERROR": // Nouvelle action pour l'erreur de commande minimale
      return {
        ...state,
        errors: { ...state.errors, orderAmountError: action.error },
      };
    case "RESET":
      return initialDeliveryState;
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}
