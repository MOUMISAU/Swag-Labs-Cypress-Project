
export const LoginPage = () => {
  const elements = {
    usernameInput: () => cy.get('#user-name'),
    passwordInput: () => cy.get('#password'),
    loginButton: () => cy.get('#login-button'),
    errorMessage: () => cy.get('[data-test="error"]')
  }

  const login = (username, password) => {
    if (username) elements.usernameInput().type(username);
    if (password) elements.passwordInput().type(password);
    elements.loginButton().click();
  }

  return { elements, login };
}
