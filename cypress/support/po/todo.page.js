import BasePage from './base.page';
import Todos from './components/todos.component';
import Footer from './components/footer.component';

class TodoPage extends BasePage {
    url = 'https://todomvc.com/examples/vue/';
    todos = new Todos('li.todo');
    footer = new Footer('footer');
    get todoInput() { return cy.get('header input') }
}

export default new TodoPage();
