
import { LoginPage } from '../pages/loginPage';
import { ItemPage } from '../pages/itemPage';

describe('Swag Labs - Login Tests', () => {
  const loginPage = LoginPage();
  const itemPage = ItemPage();

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.fixture('users').as('usersData');
  });

  it('Should login successfully with valid credentials', function () {
    loginPage.login(this.usersData.validUser.username, this.usersData.validUser.password);
  });

  it('Should show error for invalid username', function () {
    loginPage.login(this.usersData.invalidUser.username, this.usersData.invalidUser.password);
    loginPage.elements.errorMessage().should('contain.text', 'Username and password do not match');
  });

  it('Should show error for invalid password', function () {
    loginPage.login(this.usersData.invalidPassword.username, this.usersData.invalidPassword.password);
    loginPage.elements.errorMessage().should('contain.text', 'Username and password do not match');
  });

  it('Should show error when username is blank', function () {
    loginPage.login(this.usersData.blankUsername.username, this.usersData.blankUsername.password);
    loginPage.elements.errorMessage().should('contain.text', 'Username is required');
  });

  it('Should show error when password is blank', function () {
    loginPage.login(this.usersData.blankPassword.username, this.usersData.blankPassword.password);
    loginPage.elements.errorMessage().should('contain.text', 'Password is required');
  });
});