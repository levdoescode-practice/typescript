type Options = {
    debugMode?: boolean;
};

// JavaScript version
function printName2(name, { debugMode = false } = {}) {
    console.log(name, debugMode);
}

function printName7(name: string, { debugMode = false }: Options = {}) {
    console.log(name, debugMode);
}

printName7("John");

// Now if we want to add more options

function printName8(name: string, { debugMode = false, age: number } = {}) {
    console.log(name, debugMode, age);
}
// This won't work because colons (:) are used in JavaScript,
// so we would need to pass the entire object parameter

type Options2 = {
    debugMode?: boolean;
    logLevel?: number;
};

function printName9(name: string, { debugMode = false, logLevel }: Options2 = {}) {
    console.log(name, debugMode, logLevel);
}

printName9("John", { logLevel: 3 });
printName9("Jonh");
printName9("John", { logLevel: 3, debugMode: true });
printName9("John", { logLevel: 3, debugMode: true, age: 28 }); // Error

// Rest operator
function sum(...nums) {
    return nums.reduce((acc, num) => acc + num, 0);
}

function sum2(...nums: number[]) {
    return nums.reduce((acc, num) => acc + num, 0);
}

sum2(1, 2, 3);
sum2(1, 2, 3, 4, 5);
