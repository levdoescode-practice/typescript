let id: string | number = "7";
id = 7;
id = true; // Error: Type 'boolean' is not assignable to type 'string | number'.

let id2: string | number | boolean = "7";
id2 = 7; // OK
id2 = true; // OK

// Optional types are implicitly union types with undefined

type Person = {
    isProgrammer?: boolean;
};

// Is the same type as:

type Person2 = {
    isProgrammer: boolean | undefined;
};

type Todo = {
    name: string;
    status0?: string;
    status: "Completed" | "In Progress" | "Not Started";
};

const todo: Todo = { name: "Laundry", status: "Completed" };

type TodoPerson = Todo | Person;
type TodoPerson2 = Todo | { name: string; age: number };
