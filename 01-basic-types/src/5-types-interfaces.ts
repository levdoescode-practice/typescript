type PersonInfoType = {
    name: string;
    age: number;
    isProgrammer?: boolean;
    friends?: string[];
    address: {
        street: string;
        city: string;
    };
};

const person1: { name: string; age: number; isProgrammer?: boolean } = {
    name: "John",
    age: 30,
};

const person2: PersonInfoType = {
    name: "Susy",
    age: 30,
    isProgrammer: true,
    friends: ["John"],
    address: {
        street: "123 Main St",
        city: "Boston",
    },
};

type PersonX = number;

const person3: PersonX = 10;

// Interfaces MUST always be used with objects
interface PersonInfoInterface {
    name: string;
    age: number;
    isProgrammer?: boolean;
    friends?: string[];
    address: {
        street: string;
        city: string;
    };
};

interface PersonY = number; // Error: An interface can only be used with an object type
