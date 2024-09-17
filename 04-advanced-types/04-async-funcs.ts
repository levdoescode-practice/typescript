// Functions with a Promise return type
// The return type is inferred but it can be explicitly defined
function wait(duration: number): Promise<string> {
    return new Promise<string>((resolve) => {
        setTimeout(() => resolve("Hi"), duration);
    });
}

wait(1000).then((value) => {
    console.log(value);
});

// For async functions
async function waitAsync(duration: number): Promise<Response> {
    return await fetch("https://api.github.com/users/octocat");
}

waitAsync(1000).then((value) => {
    console.log(value.json());
});
