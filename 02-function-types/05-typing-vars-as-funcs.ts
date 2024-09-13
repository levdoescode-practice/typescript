function sumWithCallback(a: number, b: number, cb: Function) {
    cb(a + b);
}

sumWithCallback(1, 2, (result) => {
    console.log(result);
});

// We see an error because we need to be explicit with the callback function type

function sumWithCallback2(a: number, b: number, cb: (result: number) => void) {
    cb(a + b);
}

sumWithCallback2(1, 2, (result) => {
    console.log(result);
});

type PrintNameFunc1 = () => void;
function printFunc1() {
    console.log("Hello");
}

type PrintNameFunc2 = (name: string) => void;
function printFunc2(name: string) {
    console.log(name);
}

function printFunc3(name: string, cb: PrintNameFunc2) {
    cb(name);
}

interface Func4 {
    (name: string): void;
}

function printFunc4(name: string, cb: Func4) {
    cb(name);
}

printFunc4("John", (name) => {
    console.log(name);
});
