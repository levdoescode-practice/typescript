const person4 = { id: 1, name: "Alice", age: 30 };
const people: { name: string, age: number }[] = [];

people.push({ name: "Sally", age: 25 });
people.push(person4);

// We can use typeof to infer the type of a variable
const people2: (typeof person4)[] = [];
people2.push(person4);

function sayHi(name: string) {
    console.log(`Hi, ${name}`);
}

type FuncType = typeof sayHi;
const func: FuncType = sayHi;
func("Alice");
