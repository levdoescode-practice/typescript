// Keyof
type Person10 = {
    name: string;
    age: number;
    isProgrammer?: boolean;
};

const age = getValue("age", {name : "Alice", age: 30});

function getValue(key: keyof Person10, person: Person10) {
    return person[key];
}
