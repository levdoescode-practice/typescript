// We attempt to cast the argument to a string and then call toUpperCase on it.
// This will fail if the argument is not a string.
function func41(arg: any) {
    return (arg as string).toUpperCase();
}

type Todo41 = {
    title: string;
};

// Fetches data from an API and casts it to the Todo41 type
fetch("asdf")
    .then((res) => res.json())
    .then((data) => { return data as Todo41; })
    .then((todo) => {
        // Recieves the data as Todo41 type
        console.log(todo.title);
    });

const a = 2;
a.length; // Error: Property 'length' does not exist on type 'number'.

const b: any = 2;
(b as string).length;

// type any to another type
const c: any = 2;
const d = c as string;
