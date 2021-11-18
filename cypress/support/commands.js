import todoPage from './po/todo.page';

Cypress.Commands.add('addTodo', (todoText) => {
    todoPage.todoInput.type(todoText).type('{enter}')
});

Cypress.Commands.add('removeTodo', (todoIndex) => {
    todoPage.todos.getByIndex(todoIndex).crossButton.click({ force: true });
});

Cypress.Commands.add('doneTodo', (todoIndex) => {
    todoPage.todos.getByIndex(todoIndex).doneMarker.click();
});

Cypress.Commands.add('filterTodosBy', (filter) => {
    todoPage.footer[filter].click();
});

