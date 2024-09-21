type Todo21 = {
    title: string;
    priority: "Hight" | "Normal" | "Low";
    isComplete: boolean;
    description?: string;
    dueDate: Date | string | number;
}

// Switch statement for types
function extendTodo4(todo: Todo21) {
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
            console.log(todo.priority); // type = never
            const _exhaustiveCheck: never = todo.priority;
            // Do something
    }
}
// If we were to add more types to 'priority', _exhaustiveCheck would error out
// because we need to check for that new type first before the value is of type never
