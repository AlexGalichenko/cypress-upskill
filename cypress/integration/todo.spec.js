import todoPage from '../support/po/todo.page';

describe('todo app', () => {

    beforeEach(() => {
        cy.visit(todoPage.url);
    });

    it('should be able to add a todo', () => {
        cy.addTodo('todo1');
        todoPage.todos.base.should('have.length', 1)
    });

    it('should be able to remove a todo', () => {
        cy.addTodo('todo1');
        cy.addTodo('todo2');
        todoPage.todos.base.should('have.length', 2);
        cy.removeTodo(1);
        todoPage.todos.base.should('have.length', 1);
    });

    it('should be able to rename a todo', () => {
        cy.addTodo('todo1');
        cy.doneTodo(0);
        todoPage.todos.getByIndex(0).base.should('have.class', 'completed')
    });

    it('should be able to filter completed todos', () => {
        cy.addTodo('todo1');
        cy.addTodo('todo2');
        todoPage.todos.base.should('have.length', 2);
        cy.doneTodo(0);
        cy.filterTodosBy('completed');
        todoPage.todos.base.should('have.length', 1);
        cy.filterTodosBy('all');
        todoPage.todos.base.should('have.length', 2);
    });

})
