export const CheckoutOverviewPage = () => {
  const elements = {
    summaryTitle: () => cy.get('.title'),
    paymentInfo: () => cy.contains('Payment Information'),
    shippingInfo: () => cy.contains('Shipping Information'),
    totalPrice: () => cy.get('.summary_total_label'),
    finishButton: () => cy.get('[data-test="finish"]'),
    successMessage: () => cy.get('.complete-header')
  };

  const orderProcess = {
    verifyOverviewPage: () => {
      elements.summaryTitle().should('contain.text', 'Checkout: Overview');
      elements.paymentInfo().should('be.visible');
      elements.shippingInfo().should('be.visible');
      elements.totalPrice().should('be.visible');
    },
    finishOrder: () => {
      elements.finishButton().click();
    },
    verifyOrderSuccess: () => {
      elements.successMessage().click();
    }

  };

  return { elements, orderProcess };
};
