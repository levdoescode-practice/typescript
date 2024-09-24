type Options = {
    debug: boolean;
    format: {
        tabs: boolean;
        tabWidth: number;
    }
}

function printNumber(num: number, options?: Options) {
    console.log(num);
}

printNumber(3); // Ok
printNumber("3"); // Error"
printNumber(3, { });
/* Argument of type '{}' is not assignable to parameter of type 'Options'.
Type '{}' is missing the following properties from type 'Options': debug, format */
// Tip: Look at the last lines of the error message, that's where the erros are usually described.
// VSCode plugin: Pretty TypeScript Errors

printNumber(3, { debug: false, format: { tabs: true, }});
// Property 'tabWidth' is missing in type '{ tabs: true; }' but required in type '{ tabs: boolean; tabWidth: number; }'

// Ignore the error
// @ts-ignore
printNumber(3, { debug: false, format: { tabs: true, }});
// @ts-expect-error
printNumber(3, { debug: false, format: { tabs: true, }});
// Descript the error
