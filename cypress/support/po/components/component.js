/**
 * Base component class. Contains logic to create wrapper over cypress element
 */
class Component {
    get base() { return cy.get(this.selector) }
    constructor(selector) {
        this.selector = selector;
    }
}

export default Component;
