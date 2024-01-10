export const validateEmail = (email) => {
  const emailPattern = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$";
  if (!email.trim()) {
    return "Email cannot be empty.";
  } else if (!new RegExp(emailPattern).test(email)) {
    return "Invalid email address.";
  }
  return "";
};

export const validateName = (name) => {
  const namePattern = "^[A-Za-z\u00C0-\u00FF ]{2,}$"; // Permet les lettres avec accents
  const invalidCharsPattern = "[^A-Za-z\u00C0-\u00FF ]"; // Détecte les caractères spéciaux non autorisés

  if (!name.trim()) {
    return "Name cannot be empty.";
  } else if (new RegExp(invalidCharsPattern).test(name)) {
    return "Name contains invalid characters.";
  } else if (!new RegExp(namePattern).test(name)) {
    return "Name must be at least two letters.";
  }
  return "";
};

export const validatePhone = (phone) => {
  const phonePattern = "^[0-9+]{8,15}$"; // Un exemple de motif simple
  if (!phone.trim()) {
    return "Phone number cannot be empty.";
  } else if (!new RegExp(phonePattern).test(phone)) {
    return "Invalid phone number.";
  }
  return "";
};

export const validatePartySize = (partySize) => {
  if (!partySize.trim()) {
    return "You must select the number of guests.";
  }
  return "";
};

export const validateDate = (date) => {
  if (!date) {
    return "You must select a date.";
  }
  return "";
};

export const validateTime = (time) => {
  if (!time) {
    return "You must select a time.";
  }
  return "";
};

export const validateDeliveryMethod = (deliveryMethod) => {
  if (!deliveryMethod.trim()) {
    return "You must choose a delivery method.";
  }
  return "";
};

export const validateMinimumOrderAmount = (subtotal) => {
  const minimumOrderAmount = 30; // Montant minimum de commande en euros
  if (subtotal < minimumOrderAmount) {
    return `Minimum order amount is €${minimumOrderAmount}.`;
  }
  return "";
};

export const validateMinimumQuantity = (cartItems) => {
  const minimumQuantity = 3; // Quantité minimale requise
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  if (totalQuantity < minimumQuantity) {
    return `Minimum quantity is ${minimumQuantity} items.`;
  }
  return "";
};
