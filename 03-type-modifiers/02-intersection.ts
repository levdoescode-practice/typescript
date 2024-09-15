type Person3 = {
    name: string;
    age: number;
};

type PersonWithId = Person3 & { id: string };

const person1: Person3 = { name: "Alice", age: 30 };
const person2: PersonWithId = { name: "Bob", age: 40, id: "123" };

// Interfaces can also be used with intersection types
interface Person4 {
    name: string;
    age: number;
}

interface PersonWithId2 extends Person4 {
    id: string;
}

// Extending multiple interfaces

interface Person5 {
    name: string;
}

interface Person6 {
    age: number;
}

interface PersonWithId3 extends Person5, Person6 {
    id: string;
}

const person3: PersonWithId3 = { name: "Charlie", age: 50, id: "456" };

// With without adding extra properties
interface PersonWithId4 extends Person5, Person6 {}

// With types
type Person7 = {
    name: string;
};
type Person8 = {
    age: number;
};

type PersonWithId5 = Person7 & Person8 & { id: string };
