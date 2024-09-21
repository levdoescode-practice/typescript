function sum71(a number | number[], b?: number): number {
    return a + b;
} // This doesn't work

// Creating a function overload
function sum72(nums: number[]): number
function sum72(a: number, b: number): number
function sum72(a: number | number[], b?: number) {
    if (Array.isArray(a)) {
        return a.reduce((acc, val) => acc + val, 0);
    }
    if (b != null) {
        return a + b;
    }
    return a + b; // This is an error because 'b' could be undefined
}

const s1 = sum72([1, 2]);
const s2 = sum72(1, 2);
