# Installation

-   Create a package.json file
    `npm init -y`

-   Install TypeScript and tsc CLI
    `npm i --save-dev typescript`

-   Create a TypeScript config file
    `npx tsc --init`

-   Compile TypeScript to JavaScript
    `npx tsc script.ts`

-   Don't complete compilation when errors are raised
    `npx tsc script.ts --noEmitOnError`
    or `"noEmitOnError": true,` in `tsconfig.json`

# Using Vite

-   Create a Vite project in the current folder
    `npm create vite@latest .`
    `npm create vite@latest C:\folder\location\here`

-   Select `Vanilla` and then `TypeScript`.

-   A lot of files will be created, but we can just keep an empty main.ts and `vite-env.d.ts`

# Documentation

-   https://www.typescriptlang.org/tsconfig/
-   https://github.com/tsconfig/bases

# Notes

* When creating a new type, we can separate the type declaration by commas, semicolons or new lines
    ```TypeScript
    const person: { name: string; age: number };
    const person: { name: string, age: number };
    const person: {
        name: string
        age: number
    };
    ```
* `void` and `undefined` return types are different.
* Functions as types:
    ```TypeScript
    // Inline
    function addFunc(a: number, b: number, cb: (result: number) => void) {
        cb(a + b);
    }
    addFunc(2, 3, (result: number) => console.log(result));

    // Using a type alias
    type callBack = (result: number) => void;
    function addFunc(a: number, b: number, cb: callBack) {
        cb(a + b);
    }
    addFunc(2, 3, (result: number) => console.log(result));

    // Using an interface
    interface callBack {
        (result: number): void;
    }
    function addFunc(a: number, b: number, cb: callBack) {
        cb(a + b);
    }
    addFunc(2, 3, (result: number) => console.log(result));
    ```
## Type modifiers

* Union (OR) - Only works with types and not interfaces
    ```TypeScript
    let id: string | number = 8;
    id = "7" // OK
    id = true // Error
    ```
* Optional type is a shortcut for Union
    ```TypeScript
    type Person = {
        isProgrammer?: boolean;
    };

    // Has the same type as:
    type Person2 = {
        isProgrammer: boolean | undefined;
    };
    ```
* Type unions
    ```TypeScript
    type Cat = {
        name: string;
    };
    type Dog = {
        name: string;
    };
    type Pet = Cat | Dog | { id: string };
    ```
* Intersection (AND)
    ```TypeScript
    type Person = {
        name: string;
    };
    type PersonalInformation = {
        address: string;
    };
    type Patient = Person & PersonalInformation;
    type Patient = Person & PersonalInformation & { phone: string };
    ```
    It can also be done with interfaces:
    ```TypeScript
    interface Vehicle {
        vehicleType: string;
    };
    interface Property {
        value: number;
    };
    interface Car extends Vehicle { model: string };
    interface Car extends Vehicle, Property { model: string };
    interface Car extends Vehicle, Property {};
    ```

* Read-only types
    ```TypeScript
    type Person9 = {
        readonly id: number;
        name: string;
        age: number;
    };
    const person: Person9 = { id: 1, name: "Alice", age: 30 };
    person.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.
    ```

* keyof
    ```TypeScript
    type Person = {
        name: string;
        age: number;
    };

    const age = getValue("age", {name : "Alice", age: 30});

    function getValue(key: keyof Person, person: Person) {
        return person[key];
    }
    ```
* typeof
    ```TypeScript
    const person = { id: 1, name: "Alice", age: 30 };
    const people: { name: string, age: number }[] = [];
    const people2: (typeof person)[] = [];
    const people3: typeof person[] = [];
    people2.push({ name: "Sally", age: 25 });
    people2.push(person);
    // With functions
    function sayHello(name: string) {
        console.log(`Hello, ${name}`);
    }

    type FuncType = typeof sayHello;
    const func: FuncType = sayHello;
    func("Alice"); // "Hello, Alice"
    ```

* index type
    ```TypeScript
    // This is one option
    type SkillLevel = "Beginner" | "Intermediate" | "Advanced";
    type Person1 = {
        name: string;
        skillLevel: SkillLevel;
    };
    function printSkillLevel2(skillLevel: SkillLevel) {
        console.log(skillLevel);
    };
    const person1: Person1 = { name: "John", skillLevel: "Beginner" };
    printSkillLevel1(person1.skillLevel);

    // But we can also access they properties of a type by key
    type Person2 = {
        name: string;
        skillLevel: "Beginner" | "Intermediate" | "Advanced";
    };
    function printSkillLevel2(skillLevel: Person2["skillLevel"]) {
        console.log(skillLevel);
    };
    const person2: Person2 = { name: "John", skillLevel: "Beginner" };
    printSkillLevel2(person2.skillLevel);

    // Derived type from indexes
    type Player = {
        name: string;
        skillLevel: "Beginner" | "Intermediate" | "Advanced";
    };
    type GroupedBySkillLevel = {
        [index in Player["skillLevel"]]: Player[];
    };
    /*
    {
        "Beginner": [person1, person2],
        "Intermediate": [person3, person4],
        "Advanced": [person5, person6],
    }
    */

    // Getting the types of all elements of an array
    const a1 = ["asdf", "xyz", true];
    const a2: (string | boolean)[] = ["asdf", "xyz", true]; // Explicit
    type A = (typeof a1)[number]; // string | boolean

    // Getting the types of all indexes of an object
    const obj = {
        a: 1,
        b: "asdf",
        c: true,
    };
    type A = (typeof obj)["a"]; // number
    type C = (typeof obj)["b"]; // string
    type B = (typeof obj)["c"]; // boolean
    type D = (typeof obj)[keyof typeof obj];  // number | string | boolean
    /*
    This is getting an object with the types of the properties (typeof obj)
    { a: number, b: string, c: boolean}
    And then getting the type for each property by key (keyof typeof obj)
    resulting in the union of the types of the properties
    */
    ```
