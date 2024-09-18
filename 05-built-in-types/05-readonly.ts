// Readonly<Type>
type Todo51 = {
    title: string;
    completed: boolean;
};
type FinalTodo = Readonly<Todo51>;
// It's the same as using as const which is used for javascript
const todo51  = {
    title: 'Delete inactive users',
    completed: false
} as const;
