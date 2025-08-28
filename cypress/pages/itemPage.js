export const ItemPage = () => {
  const elements = {
    inventoryItems: () => cy.get('.inventory_item'),
    addToCartButton: (itemName) => cy.contains('.inventory_item', itemName).find('button'),
    removeFromCartButton: (itemName) => cy.contains('.inventory_item', itemName).find('button'),
    cartIcon: () => cy.get('.shopping_cart_link'),
    cartBadge: () => cy.get('.shopping_cart_badge'),
    cartItems: () => cy.get('.cart_item'),
    itemPrice: (price) => cy.contains('.inventory_item_price', price)
  }

  const addItemToCart = (itemName) => {
    elements.addToCartButton(itemName).click();
  }

  const removeItemFromCart = (itemName) => {
    elements.removeFromCartButton(itemName).click();
  }

  const openCart = () => {
    elements.cartIcon().click();
  }

  const verifyItemInCart = (itemName) => {
    elements.cartItems().contains(itemName).should('be.visible');
  }

  const verifyItemPrice = (price) => {
    elements.itemPrice(price).should('be.visible');
  }

  return { elements, addItemToCart, removeItemFromCart, openCart, verifyItemInCart, verifyItemPrice };
}
