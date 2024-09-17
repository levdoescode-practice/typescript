// Generics
const input1 = document.querySelector('.input');
console.log(input1?.value); // Error: Property 'value' does not exist on type 'Element'
// This is because the most generic type which is returned by querySelector is Element
// and it doesn't have a value property.

// We can fix this by passing a generic type to querySelector:
const input2 = document.querySelector<HTMLInputElement>('.input'); // HTMLInputElement is called a 'generic'
console.log(input2?.value); // No error

// We can fix this by using a type assertion:
const input3 = document.querySelector('.input') as HTMLInputElement;
console.log(input3.value); // No error

// Writing a generic
function getSecond(array: number[]) {
    return array[1];
}

const arr1 = [1, 2, 3];
const ret1 = getSecond(arr1); // ret is of type number

const arr2 = ["asdf", "jkl;"];
const ret2 = getSecond(b); // ret2 is of type string

// We would need to modify the function to accept strings as well:
function getSecond2(array: number[] | string[]) {
    return array[1];
}
// Or
function getSecond3(array: (number | string)[]) {
    return array[1];
}
// ret3 is of type number | string, but maybe we want a concrete type
const ret3 = getSecond3(arr2);

// We can make this function generic:
function getSecondGeneric<T>(array: T[]): T {
    return array[1];
}
const ret4 = getSecondGeneric(arr1); // ret4 is of type number - infered from the argument
const ret5 = getSecondGeneric(arr2); // ret5 is of type string - infered from the argument
const ret6 = getSecondGeneric<number>(arr1) // ret6 is of type number - explicitly set

// Map or Set
const a4 = new Set();
const a5 = new Set<number>();
a5.add(1); // OK
a5.add("asdf"); // Error

// Here Set() is using the generic type inference to infer the type of the set

const a6 = new Map();
const a7 = new Map<string, number>(); // Map<string, number> is called a 'generic'
a7.set("asdf", 1); // OK
a7.set(1, "asdf"); // Error

// The types can also be inferred from the arguments
const a8 = new Map([["asdf", 1]]); // Map<string, number> is inferred

// Generics in types
type APIResponse1 = {
    data: {};
    isError: boolean;
}

type APIResponse2<T> = {
    data: T;
    isError: boolean;
}

type APIResponse3<TData> = {
    data: TData;
    isError: boolean;
}

type UserResponse = APIResponse3<{ name: string, age: number}>;

const ur: UserResponse = {
    data: {
        name: "Ash",
        age: 30
    },
    isError: false
};

type MsgResponse = APIResponse3<string>;
const mr: MsgResponse = {
    data: "Hello",
    isError: false
};

// Default values
type APIResponse4<TData = {status: number}> = {
    data: TData;
    isError: boolean;
}
const ar: APIResponse4 = {
    data: { status: 200 },
    isError: false
}; // We're not passing a generic type, so the default is used

const ar2: APIResponse4<string> = {
    data: "OK",
    isError: false
}; // Here we need to change the data to the generic type passed

// Generic constraints
// If we want the generic to always be a string, we can constraint it:
type APIResponse5<TData extends string> = {
    data: TData;
    isError: boolean;
}

// With objects
type APIResponse6<TData extends object> = {
    data: TData;
    isError: boolean;
}

// Default values
type APIResponse7<TData extends object = {status: number}> = {
    data: TData;
    isError: boolean;
}
const ar3: APIResponse7 = {
    data: { status: 200 },
    isError: false
}; // We're not passing a generic type, so the default is used

//
const arr3: Array<number> = [1, 2, 3];
// This is the same as:
const arr4: number[] = [1, 2, 3];

// We have been generics but in a different way
// We can be explicit about the type in the generic
const a9: APIResponse3<Array<number>> = {
    data: [1, 2, 3],
    isError: false
};
// It's the same as:
const a10: APIResponse3<number[]> = {
    data: [1, 2, 3],
    isError: false
};

// In a function
function aToO<T>(array: [string, T][]) {
    const obj: {[index: string]: T} = {};

    array.forEach(([key, value]) => {
        obj[key] = value;
    });
    return obj;
}

const arr: [string, number | boolean][] = [["KeyOne", 1], ["KeyTwo", 2], ["KeyThree", true]];

const o1 = aToO(arr); // { KeyOne: 1, KeyTwo: 2, KeyThree: true }
