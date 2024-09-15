type Person9 = {
    readonly id: number;
    name: string;
    age: number;
};

const person: Person9 = { id: 1, name: "Alice", age: 30 };
person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// With array

type NumberArray = readonly number[];
const numbers: NumberArray = [1, 2, 3];
numbers.push(4); // Error: Property 'push' does not exist on type 'readonly number[]'.
numbers[0] = 10; // Error: Index signature in type 'readonly number[]' only permits reading.
