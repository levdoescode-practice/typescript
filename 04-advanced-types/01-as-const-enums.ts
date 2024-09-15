let a1 = 1; // implied type number
const b1 = 2; // implied type 2 that doesn't change
// This is the same as
const b2 = 2 as const; // explicit type 2 that doesn't change
// This is the same as
let a2 = 1 as const; // explicit type 1 that doesn't change
a2 = 2; // Error: Type '2' is not assignable to type '1'

// Use with objects
const nums0 = ["1", "2", "3"]; // implied type string[] - const nums: string[]
const nums1 = ["1", "2", "3"] as const; // const nums: readonly ["1", "2", "3"]
const c1 = nums1[0]; // const c1: "1"
nums1[0] = "2"; // Error: Cannot assign to '0' because it is a read-only property

// Using an array as const
const SKILL_LEVELS = ["Beginner", "Intermediate", "Expert"] as const;

type Person1 = {
    skillLevel0: "Beginner" | "Intermediate" | "Expert";
    skillLevel: (typeof SKILL_LEVELS)[number]; // "Beginner" | "Intermediate" | "Expert"
};

SKILL_LEVELS.forEach((skillLevel) => {
    console.log(skillLevel);
});

// Object as const
const person = {
    name: "Todd",
    age: 27,
    address: {
        street: "1234 Main St",
        city: "Houston",
    },
} as const;

person.address.street = "4321 Elm St"; // Error: Cannot assign to 'street' because it is a read-only property
person.age = 28; // Error: Cannot assign to 'age' because it is a read-only property
