const person = { name: "John", age: 30 }; // not explicit
// person.isProgrammer = true;
const person1: { name: string; age: number } = { name: "John", age: 30 }; // explicit

const person2: { name: string; age: number; isProgrammer: boolean } = { name: "John", age: 30, isProgrammer: true };

// Optional properties
const person3: { name: string; age: number; isProgrammer?: boolean } = { name: "John", age: 30, isProgrammer: true };
const person4: { name: string; age: number; isProgrammer?: boolean } = { name: "John", age: 30 };
