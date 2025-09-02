# Swag Labs Cypress Project

This project contains end-to-end tests for the Swag Labs demo application using Cypress.

## Project Structure

```
cypress.config.js
package.json
readme.md
cypress/
  e2e/                # Test specifications
    checkOutTest.cy.js
    itemTest.cy.js
    loginTest.cy.js
  fixtures/           # Test data (JSON)
    checkoutData.json
    items.json
    users.json
  pages/              # Page Object Models
    checkOutOverviewPage.js
    checkOutPage.js
    itemPage.js
    loginPage.js
  screenshots/        # Cypress screenshots
  support/            # Custom commands and support files
cypress-reports/      # Mochawesome HTML/JSON reports
```

## How to Run Tests

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run all tests in headless mode:**
   ```bash
   npx cypress run
   ```
3. **Open Cypress Test Runner (GUI):**
   ```bash
   npx cypress open
   ```

## How to Generate Test Reports

After running your tests, you can generate a combined Mochawesome HTML report:

1. **Merge JSON reports:**
   ```bash
   npm run merge-reports
   ```
2. **Generate HTML report:**
   ```bash
   npm run generate-html
   ```

**Alternatively**, you can run everything and generate a latest report always with:
```bash
npm run report
```
The HTML and JSON reports will be saved in the `cypress-reports/` directory.

## Test Coverage
- **Login Tests:** Valid/invalid login scenarios
- **Item Tests:** Add/remove items from cart
- **Checkout Tests:** Valid/invalid checkout flows

## Reports
- Test results are saved in `cypress-reports/` as Mochawesome HTML and JSON files.

## Customization
- Test data can be modified in `cypress/fixtures/`
- Page objects are in `cypress/pages/`

## Requirements
- Node.js >= 18.x
- Cypress >= 14.x

## Author
- Moumi

---
Feel free to modify or extend the tests for your own needs.
