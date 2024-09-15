type Person11 = {
    name: string;
    skillLevel: "Beginner" | "Intermediate" | "Advanced";
};

const person11: Person11 = { name: "John", skillLevel: "Beginner" };
printSkillLevel(person11.skillLevel);

function printSkillLevel(skillLevel: "Beginner" | "Intermediate" | "Advanced") {
    console.log(skillLevel);
}

// If we add a new skill level, we need to update the function signature
// printSkillLevel("Expert"); // Error: Argument of type '"Expert"' is not assignable to parameter of type '"Beginner" | "Intermediate" | "Advanced"'.

// We could use types

type SkillLevel = "Beginner" | "Intermediate" | "Advanced";

type Person12 = {
    name: string;
    skillLevel: SkillLevel;
};

const person12: Person12 = { name: "John", skillLevel: "Beginner" };
printSkillLevel2(person12.skillLevel);
function printSkillLevel2(skillLevel: SkillLevel) {
    console.log(skillLevel);
}

// Using the type of the property
type Person13 = {
    name: string;
    skillLevel: "Beginner" | "Intermediate" | "Advanced";
};

const person13: Person13 = { name: "John", skillLevel: "Beginner" };
printSkillLevel3(person13.skillLevel);

function printSkillLevel3(skillLevel: Person13["skillLevel"]) {
    console.log(skillLevel);
}

// We can use the type of the property to create a new type
/*
{
    "Beginner": [person1, person2],
    "Intermediate": [person3, person4],
}
*/

type PeopleGroupedBySkillLevel1 = {
    [index in Person13["skillLevel"]]: Person12[];
};

type PeopleGroupedBySkillLevel2 = {
    [index in SkillLevel]: Person12[];
};

const groupedPeople: PeopleGroupedBySkillLevel1 = {
    Beginner: [person13],
    Advanced: [person13],
    Intermediate: [person13],
};

// Using the name property
type Person14 = {
    name: string;
    skillLevel: "Beginner" | "Intermediate" | "Advanced";
};
type PeopleGroupedByName = {
    [index: Person14["name"]]: Person14[];
};

const groupedPeople2: PeopleGroupedByName = {
    asdf: [{ name: "John", skillLevel: "Beginner" }];
};

// In this case we could also just use the string type
type PeopleGroupedByName2 = {
    [index: string]: Person14[];
};

// Getting the types of an array into one
const a1 = ["asdf", "xyz", true];
const a2: (string | boolean)[] = ["asdf", "xyz", true];

type A = (typeof a1)[number];

// Using objects
const obj = {
    a: 1,
    b: "asdf",
    c: true,
};

type C = (typeof obj)["b"];
type B = (typeof obj)["c"];
type D = (typeof obj)[keyof typeof obj];  // number | string | boolean
// This is getting an object with the types of the properties (typeof obj)
// And then getting the type for each property by key (keyof typeof obj)
// resulting in the union of the types of the properties
