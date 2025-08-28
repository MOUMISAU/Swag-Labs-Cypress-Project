import { LoginPage } from '../pages/loginPage';
import { ItemPage } from '../pages/itemPage';

describe('Swag Labs - Item Tests', () => {
  const loginPage = LoginPage();
  const itemPage = ItemPage();

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');
    cy.fixture('users').as('usersData');
    cy.fixture('items').as('itemsData');

    cy.get('@usersData').then((users) => {
      loginPage.login(users.validUser.username, users.validUser.password);
    });
  });

  it('Should add a single item to the cart', function () {
    const item = this.itemsData[0];
    itemPage.addItemToCart(item.name);
    itemPage.elements.cartBadge().should('contain.text', '1');

    itemPage.openCart();
    itemPage.verifyItemInCart(item.name);
    itemPage.verifyItemPrice(item.price);
  });

  it('Should add multiple items to the cart', function () {
    this.itemsData.forEach((item) => {
      itemPage.addItemToCart(item.name);
    });
    itemPage.elements.cartBadge().should('contain.text', this.itemsData.length);

    itemPage.openCart();
    this.itemsData.forEach((item) => {
      itemPage.verifyItemInCart(item.name);
      itemPage.verifyItemPrice(item.price);
    });
  });

  it('Should remove an item from the cart', function () {
    const item = this.itemsData[1];
    itemPage.addItemToCart(item.name);
    itemPage.elements.cartBadge().should('contain.text', '1');

    itemPage.removeItemFromCart(item.name);
    itemPage.elements.cartBadge().should('not.exist');
  });

  it('Should allow adding the same item more than once', function () {
    const item = this.itemsData[2];

    // itemPage.addItemToCart(item.name);
    // itemPage.elements.cartBadge().should('contain.text', '1');

    // ***Add same item again (expected: allowed)
    itemPage.addItemToCart(item.name);
    itemPage.elements.cartBadge().should('contain.text', '2');

    // verify there are two same items in cart
    itemPage.openCart();
    itemPage.elements.cartItems().contains(item.name).should('have.length', 2);
  });
});
