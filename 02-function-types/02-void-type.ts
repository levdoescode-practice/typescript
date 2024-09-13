// This function returns a number
function sum(a: number, b: number): number {
  return a + b;
}

const result = sum(1, 2);

function printName(name: string) { // Return type is inferred to 'void'
  console.log(name);
}

function printName2(name: string) {
    if (name) {
        console.log(name);
    }
    return;
}

function printName3(name: string) {
    console.log(name);
    return undefined;
}

function printName4(name: string): void {
    console.log(name);
}

const a = printName('John');  // This will print 'John' to the console
