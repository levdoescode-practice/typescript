// Return type
function checkLength(a: string, b: number) {
    return a.length < b;
}
type ReturnOfLengthCheck = ReturnType<typeof checkLength>; // boolean

// Or

type Func = () => void;
type ReturnOfFunc = ReturnType<Func>; // void

// Parameter type
function checkSomething(a: string, b: number, c: boolean) {
    return a.length < b && c;
}
type ParamsOfLengthCheck = Parameters<typeof checkSomething>; // [a: string, b: number, c: boolean]
// individual parameters
type FirstParam = Parameters<typeof checkSomething>[0]; // string
type SecondParam = Parameters<typeof checkSomething>[1]; // number

// Void Parameters
function doSomething() {
    console.log('Doing something');
}
type ParamsOfDoSomething = Parameters<typeof doSomething>; // []
