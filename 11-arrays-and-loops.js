let TodoList = [
    {
        name: '',
        dueDate: ''
    }
];
function renderTodo() {
    let TodoListhtml = '';

    for (let i = 0; i < TodoList.length; i++) {
        const todo = TodoList[i];
        const { name, dueDate } = todo;
        const html = `<p>${name} ${dueDate} <button class="js-delete" onclick="deleteTodo(${i})">delete</button></p>`;
        TodoListhtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = TodoListhtml
    console.log(TodoListhtml);
}
function deleteTodo(index) {
    TodoList.splice(index, 1);
    renderTodo();
}

renderTodo();

function handleClick() {
    const inputElement = document.querySelector('.to-do-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.date');
    const dueDate = dateInputElement.value;

    TodoList.push({
        name,
        dueDate
    });
    inputElement.value = '';
    renderTodo();

}


/*
let TodoList = ['viki eat', 'viki code'];

let TodoListhtml= '';
function renderTodo() {
    let TodoList = '';
    // let TodoListhtml = '';
    for (let i = 0; i < TodoList.length; i++) {
        const todo = TodoList[i];
        const html = `<p> ${todo} </p>`
        TodoListhtml += html;
    }
    document.querySelector('.js-todo-list').innerHTML = TodoListhtml
    console.log(TodoListhtml);
}
renderTodo()

function handleClick() {
    renderTodo();
    const inputElement = document.querySelector('.to-do-input');
    const name = inputElement.value;
    //    console.log(name);
    TodoList.push(name);
    // console.log(TodoList);
    inputElement.value = '';

}
*/