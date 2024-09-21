type Person81 = {
    name: string;
};

type Todo81 = {
    title: string;
};

function print(obj: Person81 | Todo81) {
    if ("name" in obj) {
        console.log(obj.name);
        return;
    }
    console.log(obj.title);
}

// When a function returns a boolean and also narrows the type of a variable, it is called a type predicate.
function isPerson(obj: Person81 | Todo81): obj is Todo81 {
    return (obj as Person81).name !== undefined;
    return "name" in obj;
    // We have to be sure that the type is correct, otherwise we'll be lying to TypeScript
    // and get errors in the future
}

// More real world example
const PRIORITIES = ["High", "Medium", "Low"] as const;
type Priority = (typeof PRIORITIES)[number];
type Todo82 = {
    title: string;
    description: string;
};

function func81(todo: Todo82) {
    if (isPriority(todo.description)) {
        console.log(todo.description); // type "Hight" | "Normal" | "Low"
    } else {
        console.log(todo.description); // type string
    }
}

function isPriority(description: string): description is Priority {
    return PRIORITIES.includes(description as Priority);
    // If description is not of type Priority, it will return false, thus not narrow the type
}
