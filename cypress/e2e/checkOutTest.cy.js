// import { LoginPage } from '../pages/loginPage';
// import { ItemPage } from '../pages/itemPage';
// import { CheckoutPage } from '../pages/checkoutPage';
// import { CheckoutOverviewPage } from '../pages/checkOutOverviewPage';

// describe('Swag Labs - Checkout Tests', () => {
//     const loginPage = LoginPage();
//     const itemPage = ItemPage();
//     const checkoutPage = CheckoutPage();
//     const checkoutOverviewPage = CheckoutOverviewPage();

//     beforeEach(() => {
//         cy.visit('https://www.saucedemo.com/');
//         cy.fixture('users').then((users) => {
//             loginPage.login(users.validUser.username, users.validUser.password);
//         });
//         cy.fixture('items').then((items) => {
//             itemPage.addItemToCart(items[0].name);
//             itemPage.openCart();
//         });
//     });

//     it('should complete checkout with valid data', () => {
//         cy.fixture('checkoutData').then((data) => {
//             checkoutPage.checkOutProcess.enterCheckOutInfo(data.firstName, data.lastName, data.zipCode);
//             checkoutPage.checkOutProcess.clickOnContinue();
//             checkoutOverviewPage.orderProcess.verifyOverviewPage();
//             checkoutOverviewPage.orderProcess.finishOrder();
//             checkoutOverviewPage.orderProcess.verifyOrderSuccess();
//         });
//     });

//     it('should show error when first name is missing', () => {
//         cy.fixture('checkoutData').then((data) => {
//             checkoutPage.checkOutProcess.enterCheckOutInfo('', data.lastName, data.zipCode);
//             checkoutPage.checkOutProcess.clickOnContinue();
//             checkoutPage.checkOutProcess.verifyErrorMessage('Error: First Name is required');
//         });
//     });

//     it('should show error when last name is missing', () => {
//         cy.fixture('checkoutData').then((data) => {
//             checkoutPage.checkOutProcess.enterCheckOutInfo(data.firstName, '', data.zipCode);
//             checkoutPage.checkOutProcess.clickOnContinue();
//             checkoutPage.checkOutProcess.verifyErrorMessage('Error: Last Name is required');
//         });
//     });

//     it('should show error when postal code is missing', () => {
//         cy.fixture('checkoutData').then((data) => {
//             checkoutPage.checkOutProcess.enterCheckOutInfo(data.firstName, data.lastName, '');
//             checkoutPage.checkOutProcess.clickOnContinue();
//             checkoutPage.checkOutProcess.verifyErrorMessage('Error: Postal Code is required');
//         });
//     });

//     it('should show error when all data is missing', () => {
//         cy.fixture('checkoutData').then((data) => {
//             checkoutPage.checkOutProcess.enterCheckOutInfo('', '', '');
//             checkoutPage.checkOutProcess.clickOnContinue();
//             checkoutPage.checkOutProcess.verifyErrorMessage('Error: First Name , Last Name , Zip Code is required');
//         });
//     });
// });


import { LoginPage } from '../pages/loginPage';
import { ItemPage } from '../pages/itemPage';
import { CheckoutPage } from '../pages/checkOutPage';
import { CheckoutOverviewPage } from '../pages/checkOutOverviewPage';

describe('Swag Labs - Checkout Tests', () => {
    const loginPage = LoginPage();
    const itemPage = ItemPage();
    const checkoutPage = CheckoutPage();
    const checkoutOverviewPage = CheckoutOverviewPage();

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.fixture('users').then((users) => {
            loginPage.login(users.validUser.username, users.validUser.password);
        });
        cy.fixture('items').then((items) => {
            itemPage.addItemToCart(items[0].name);
            itemPage.openCart();
        });

        checkoutPage.actions.goToCheckout();
    });

    it('should complete checkout with valid data', () => {
        cy.fixture('checkoutData').then((data) => {
            checkoutPage.actions.enterCheckoutInfo({
                firstName: data.firstName,
                lastName: data.lastName,
                zipCode: data.zipCode
            });

            checkoutPage.actions.clickContinue();
            checkoutOverviewPage.orderProcess.verifyOverviewPage();
            checkoutOverviewPage.orderProcess.finishOrder();
            checkoutOverviewPage.orderProcess.verifyOrderSuccess();
        });
    });

    it('should show error when first name is missing', () => {
        cy.fixture('checkoutData').then((data) => {
            checkoutPage.actions.enterCheckoutInfo({
                firstName: '',
                lastName: data.lastName,
                zipCode: data.zipCode
            });

            checkoutPage.actions.clickContinue();
            checkoutPage.actions.verifyErrorMessage('Error: First Name is required');
        });
    });

    it('should show error when last name is missing', () => {
        cy.fixture('checkoutData').then((data) => {
            checkoutPage.actions.enterCheckoutInfo({
                firstName: data.firstName,
                lastName: '',
                zipCode: data.zipCode
            });

            checkoutPage.actions.clickContinue();
            checkoutPage.actions.verifyErrorMessage('Error: Last Name is required');
        });
    });

    it('should show error when postal code is missing', () => {
        cy.fixture('checkoutData').then((data) => {
            checkoutPage.actions.enterCheckoutInfo({
                firstName: data.firstName,
                lastName: data.lastName,
                zipCode: ''
            });

            checkoutPage.actions.clickContinue();
            checkoutPage.actions.verifyErrorMessage('Error: Postal Code is required');
        });
    });

    it('should show error when all data is missing', () => {
        checkoutPage.actions.enterCheckoutInfo({
            firstName: '',
            lastName: '',
            zipCode: ''
        });

        checkoutPage.actions.clickContinue();
        checkoutPage.actions.verifyErrorMessage('Error: All data is required');
    });
});

