type Todo51 = {
    title: string;
    dueDate: string | Date;
    isComplete: boolean;
};

const todo51: Todo51 = {
    title: "Clean the house",
    dueDate: new Date(),
    isComplete: false,
};

todo51.dueDate.setDate(4); // Error: Property 'setDate' does not exist on type 'string | Date'.

// Here TypeScript is unable to determine the type of todo51.dueDate
// So we'll use the satisfies type guard to narrow the type of todo51.dueDate
// to Date before calling the setDate method.

const todo52 = {
    title: "Clean the house",
    dueDate: new Date(),
    isComplete: false,
} satisfies Todo51;
// We omit using the : to type the variable and instead use the satisfies keyword
// because otherwise we'll lose the more specific type of todo52.dueDate
todo52.dueDate.setDate(4);
