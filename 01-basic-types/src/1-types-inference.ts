let a: number = 4;

let b: number = "hello"; // Error: Type 'string' is not assignable to type 'number'.

let c: string = "hello";
c = 4; // Error: Type 'number' is not assignable to type 'string'.

let d = "hello"; // Type 'string' is inferred by the compiler.
let e: any = "hello"; // Type 'any' is inferred by the compiler.

e.foo(); // No error, but it will fail at runtime.

const f = 4; // Type '4' is inferred by the compiler. This is a literal type.
const g = "hello"; // Type 'hello' is inferred by the compiler. This is a literal type.

let h: 4 = 4; // Type '4' is explicitly set. This is a literal type.
const i: 4 = 4;

const a1 = null; // Type 'null' is inferred by the compiler.
let a2: null = null;
a2 = undefined; // Error: Type 'undefined' is not assignable to type 'null'.
