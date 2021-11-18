import Component from './component';

/**
 * Todos class represents a collection of Todo elements that may be accessed by index
 */
class Todos extends Component {
    getByIndex(index) {
        return new Todo(this.base.eq(index))
    }
}

class Todo {
    constructor(base) {
        this.base = base;
    }

    get crossButton() { return this.base.find('.destroy') }
    get doneMarker() { return this.base.find('input.toggle') }
    get label() { return this.base.find('label') }
}

export default Todos;
