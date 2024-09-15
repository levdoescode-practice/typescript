const person2 = {
    name: "John",
    age: 30,
};

Object.entries(person2).forEach(([key, value]) => {
    console.log(key, value);
});

type Tuple = [string, boolean];
const a3: Tuple = ["hello", true];
