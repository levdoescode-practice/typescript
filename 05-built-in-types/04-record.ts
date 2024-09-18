type Person41 = {
    name: string;
    age: number;
}
// A derived type that maps a string to a Person41
type PeopleGroupedByName41 = {
    [name: string]: Person41;
}

const people: PeopleGroupedByName41 = {
    'John': { name: 'John', age: 25 },
    'Jane': { name: 'Jane', age: 22 }
};

// Using Record
type PeopleGroupedByName2 = Record<string, Person41>; // type = { [x: string]: Person041; }
type PeopleGroupedByName3 = Record<Person41["name"], Person41>; // type = { [x: string]: Person041; }

const person1: PeopleGroupedByName2 = { 'John': { name: 'John', age: 25 } };
const person2: PeopleGroupedByName3 = { 'John': { name: 'John', age: 25 } };
