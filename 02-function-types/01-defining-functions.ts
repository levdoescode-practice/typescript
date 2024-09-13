

function printName(name: string, lastNmae: string) {
    console.log(name);
}

printName('John', 'Doe');

// With the return type
function printName2(name: string, lastNmae: string): void {
    console.log(name);
}

printName2('John', 'Doe');

function add1(a: number, b: number) { // return type is inferred
    return a + b;
}

// return type is explicitly defined, but it is not necessary. However, it's restrictive
function add2(a: number, b: number): number {
    return a + b;
}

const c: number = add1(1, 2);

// Passing objects to a function

function printPerson(person) { // this needs the type
    console.log(person.name);
}

function printPerson2(person: { name: string }) { // this is better
    console.log(person.name);
}

printPerson2({ name: 'John', age: 28 }); // this will not work

const person = { name: 'John', age: 28 };
printPerson2(person); // this will work

const person2 = { age: 28 };
printPerson2(person2); // this will not
// work because it needs the string name declared in the function

type Person = { name: string };

function printPerson3(person: Person) {
    console.log(person.name);
}