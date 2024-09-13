function printName(name: string, age: number) {
    console.log(name, age);
}

printName('John', 28);

function printNameAndAge(name: string, options?: {debugMode: boolean}) {
    console.log(name, options);
}

printNameAndAge('John', {debugMode: true});
printNameAndAge('John' );
