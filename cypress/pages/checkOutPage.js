export const CheckoutPage = () => {
  const elements = {
    firstNameInput: () => cy.get('[data-test="firstName"]'),
    lastNameInput: () => cy.get('[data-test="lastName"]'),
    zipCodeInput: () => cy.get('[data-test="postalCode"]'),
    continueButton: () => cy.get('[data-test="continue"]'),
    cancelButton: () => cy.get('[data-test="cancel"]'),
    errorMessage: () => cy.get('[data-test="error"]'),
    checkoutButton: () => cy.get('[data-test="checkout"]'), 
  };

  const actions = {
    goToCheckout: () => {
      elements.checkoutButton().click();
    },
    enterCheckoutInfo: ({ firstName, lastName, zipCode }) => {
      if (firstName) elements.firstNameInput().type(firstName);
      if (lastName) elements.lastNameInput().type(lastName);
      if (zipCode) elements.zipCodeInput().type(zipCode);
    },
    clickContinue: () => {
      elements.continueButton().click();
    },
    clickCancel: () => {
      elements.cancelButton().click();
    },
    verifyErrorMessage: (message) => {
      elements.errorMessage().should('contain.text', message);
    },
  };

  return { elements, actions };
};
