type Todo = {
    title: string;
    priority: "Hight" | "Normal" | "Low";
    isComplete: boolean;
    description?: string;
    dueDate: Date | string | number;
}

function extendTodo1(todo: Todo) {
    todo.dueDate.getDay(); // Error: Property 'getDay' does not exist on type 'string | Date'.
    // Solution
    if(typeof todo.dueDate === 'string') {
        todo.dueDate.toUpperCase(); // Ok
        console.log(todo.dueDate);
    } else { // type Date or number
        todo.dueDate.getDay();
    }

    // Another solution
    if (todo.dueDate instanceof Date) {
        todo.dueDate.getDay(); // Ok
    } else if (typeof todo.dueDate === "number") {
        todo.dueDate.toFixed(); // Ok
    } else { // type string
        todo.dueDate.toUpperCase(); // Ok
    }
}

function extendTodo2(todo: Todo) {
    if (todo.dueDate instanceof Date) {
        // Do something
        return;
    }
    console.log(todo.dueDate); // type string | number
}

function extendTodo3(todo: Todo) {
    if (todo.description) {
        // Do something
    }
    // Optional chaining operator
    todo.description?.length;
}

// Excamation mark (!) to tell TypeScript that the value is not null or undefined
const form = document.querySelector<HTMLFormElement>('.form');
form!.addEventListener('submit', (e) => {});

// Switch statement for types
function extendTodo4(todo: Todo) {
    switch (todo.priority) {
        case 'Hight':
            console.log(todo.priority);
            break;
        case 'Normal':
            console.log(todo.priority);
            break;
        case 'Low':
            console.log(todo.priority);
            break;
        default:
            const _exhaustiveCheck: never = todo.priority;
    }
}
