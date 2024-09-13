const a = [1, 2, 3]; // Type infered to number[] (number array)

const b: number[] = [1, 2, 3]; // Type explicitly set to number[] (number array)

let c: number[] = [];
c = [1, 2, 3];

const d: number[] = [1, 2, 3];
d.push(4); // OK
d.push('5'); // Error: Argument of type 'string' is not assignable to parameter of type 'number'

const e: [1, 2, 3] = [1, 2, 3]; // Type explicitly set to [1, 2, 3] (tuple)
e.push(4); // Error: Property 'push' does not exist on type '[1, 2, 3]'
e.push(3);

const f = [1, 2, 3];
f.push(4); // OK

const d1: Date[] = [new Date(), new Date()]; // Type explicitly set to Date[] (Date array)
d1.push(new Date()); // OK
