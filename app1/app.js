// Selectors

const newTodo = document.querySelector('.newTodo');
const addTodo = document.querySelector('.addTodo');
const todoList = document.querySelector('.todoList')

// Event Listeners
addTodo.addEventListener('click',(e)=>{
    e.preventDefault();

    // Create Todo Item Div
    const todo = document.createElement('div');
    todo.classList.add('todoItem')
    todo.innerHTML = '<span>' + newTodo.value + '</span>';

    // Create complete button
    const completeBtn = document.createElement('button')
    completeBtn.classList.add('complete');
    completeBtn.innerText = '√'
    todo.appendChild(completeBtn);

    // Create delete button
    const delBtn = document.createElement('button');
    delBtn.classList.add('delete');
    delBtn.innerText = 'X';
    todo.appendChild(delBtn);


    // Add Todo Item to Todo List
    todoList.appendChild(todo);

    // Clear Todo input
    newTodo.value = "";
})

todoList.addEventListener('click',(e) => {
    console.log(e.target);
    if(e.target.classList.contains('complete')){
        e.target.parentElement.classList.toggle('done');
    } else if(e.target.classList.contains('delete')){
        e.target.parentElement.remove();
    } else {
        // fail silently
    }
})