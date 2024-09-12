const num1 = 1;
const num2 = 3;

function sum(a: number, b: number) {
    return a + b;
}

sum(num1); // Error: Expected 2 arguments, but got 1.
sum(num1, num2); // 4
