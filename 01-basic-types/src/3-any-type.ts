let a; // Type infered to 'any'

let b: any = 1; // Type explicitly set to 'any'
let c: any = '1'; // Type explicitly set to 'any'

c = 3;
c = "asdf";

let d = undefined; // Type infered to 'any'
let e = null; // Type infered to 'any'
