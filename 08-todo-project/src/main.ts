import "./styles.css";

type Todo = {
    id: string;
    name: string;
    complete: boolean;
};

const form = document.querySelector<HTMLFormElement>("#new-todo-form")!;
const todoInput = document.querySelector<HTMLFormElement>("#todo-input")!;
const todoList = document.querySelector<HTMLUListElement>("#list")!;
let todos: Todo[] = [];

form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoName = todoInput.value;
    if (todoName.trim() === "") return;
    const newTodo = {
        id: crypto.randomUUID(),
        name: todoName,
        complete: false,
    };
    todos.push(newTodo);
    renderNewTodo(newTodo);
    todoInput.value = "";
});

// <li class="list-item">
// <label class="list-item-label">
//     <input class="label-input" type="checkbox" />
//     <span class="label-text">Placeholder Task</span>
// </label>
// <button class="delete-btn">Delete</button>
// </li>

function renderNewTodo(todo: Todo) {
    const todoItem = document.createElement("li");
    todoItem.classList.add("list-item");

    const todoLabel = document.createElement("label");
    todoLabel.classList.add("list-item-label");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.complete;
    checkbox.classList.add("label-input");
    checkbox.addEventListener("change", (e) => {
        todo.complete = checkbox.checked;
    });

    const textElement = document.createElement("span");
    textElement.classList.add("label-text");
    textElement.innerText = todo.name;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", () => {
        todoList.removeChild(todoItem);
        const todoIndex = todos.findIndex((t) => t.id === todo.id);
        todos.splice(todoIndex, 1);
        /*
        todoItem.remove();
        todos = todos.filter(t => t.id !== todo.id);
        */
        console.log(todos);
    });

    todoLabel.append(checkbox, textElement);
    todoItem.append(todoLabel, deleteButton);

    todoList.appendChild(todoItem);
}
