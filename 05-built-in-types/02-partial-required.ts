type Todo3 = {
    title?: string,
    completed: boolean,
    address: {
        street?: string,
        door: number
    }
}

type FormTodo1 = Partial<Todo3> // Everything is optional
type FormTodo2 = Required<Todo3> // Everything is required

// Certain keys required
type FormTodo3 = Required<Pick<Todo3, 'title'>> // type FormTodo3 = { title: string };

// Combining Required and Omit
type FormTodo4 = Required<Pick<Todo3, 'title'>> & Omit<Todo3, 'title'>;

const todo: FormTodo4 = {
    title: 'Buy Milk',
    completed: false,
    address: {
        door: 12
    }
}

// Below works the same as FormTodo4 because required overwrites optional
type FormTodo5 = Required<Pick<Todo3, 'title'>> & Todo3;

type Todo4 = {
    title: string, // required
    completed: boolean,
    address: {
        street?: string,
        door: number
    }
}
type FormTodo6 = Partial<Pick<Todo4, 'title'>> & Omit<Todo4, 'title'>;
// We make it partial only picking title and then we combine it with the rest of the object

const todo2: FormTodo6 = { // title is optional now
    completed: false,
    address: {
        door: 12
    }
}

// Manual Required
type RequiredPick<T, Key extends keyof T> = Required<Pick<T, Key>> & T;
type Todo5 = {
    title?: string, // required
    completed: boolean,
    address: {
        street?: string,
        door: number
    }
}
type FormTodo7 = RequiredPick<Todo5, 'title'>
const todo3: FormTodo7 = { // title is required now
    completed: false,
    address: {
        door: 12
    }
}
// Manual Partial
type PartialPick<T, Key extends keyof T> = Partial<Pick<T, Key>> & Omit<T, Key>;
type FormTodo8 = PartialPick<Todo5, 'completed'>
const todo4: FormTodo8 = { // completed is optional now
    title: 'Buy Milk',
    address: {
        door: 12
    }
}
