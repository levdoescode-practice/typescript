type Async = Promise<string>; // Promise with a return type of string
// Get the type of the resolved value of a promise
type Unpacked = Awaited<Async>; // type = string

type Async2 = Promise<Promise<string>>; // Promise with a return type of Promise<string>
// Get the type of the resolved value of a promise, even if it's nested in another promise
type Unpacked2 = Awaited<Async2>; // type = string

async function doSomething51() {
    return 8;
}

type Value = Awaited<ReturnType<typeof doSomething51>>; // type = number
