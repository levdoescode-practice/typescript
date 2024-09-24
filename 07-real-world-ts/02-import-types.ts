export type User = {
    id: string;
    name: string;
    age: number;
};

export const me: User = {
    id: "1",
    name: "John",
    age: 30,
};

export type Options = {
    debug: boolean;
    format: {
        tabs: boolean;
        tabWidth: number;
    };
};
