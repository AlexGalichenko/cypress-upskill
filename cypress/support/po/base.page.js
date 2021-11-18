/**
 * Base page. Contains the most common things (e.g footer or header of whole application)
 */
class BasePage {
    url = null;
    open() {
        cy.visit(this.url)
    }
}

export default BasePage;
