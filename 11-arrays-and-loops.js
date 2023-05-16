
let TodoList = ['viki eat', 'viki code'];

let TodoListhtml = '';

function renderTodo() {
    for (let i = 0; i < TodoList.length; i++) {
        const todo = TodoList[i];
        const html = `<p>${todo} <button onclick="">delete</button></p>`;
        TodoListhtml += html;
    }
    console.log(TodoListhtml);
    document.querySelector('.js-todo-list').innerHTML = TodoListhtml
    console.log(TodoListhtml);
}

renderTodo();

function handleClick() {
    renderTodo();
    const inputElement = document.querySelector('.to-do-input');
    const name = inputElement.value;
    TodoList.push(name);
    inputElement.value = '';
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