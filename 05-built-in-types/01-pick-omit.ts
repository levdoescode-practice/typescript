// Example of vanilla code with repeated code
type Todo = {
    id: string;
    name: string;
    completed: boolean;
};

type NewTodo = {
    name: string;
    completed: boolean;
};

function saveTodo(todo: NewTodo): Todo {
    return { ...todo, id: crypto.randomUUID() };
}

function renderTodo(todo: Todo) {
    const div = document.createElement('div');
    div.id = todo.id;
    div.innerText = todo.name;
    div.className = todo.completed ? 'completed' : '';
    document.body.appendChild(div);
}

// We optimize the code:
type Todo2 = {
    id: string;
    name: string;
    status: string;
    completed: boolean;
};

type NewTodo2 = Pick<Todo2, 'name' | 'status' | 'completed'>;
type NewTodo3 = Omit<Todo2, 'id'>;

function saveTodo2(todo: NewTodo3): Todo {
    return { ...todo, id: crypto.randomUUID() };
}

function renderTodo2(todo: Todo) {
    const div = document.createElement('div');
    div.id = todo.id;
    div.innerText = todo.name;
    div.className = todo.completed ? 'completed' : '';
    document.body.appendChild(div);
}
