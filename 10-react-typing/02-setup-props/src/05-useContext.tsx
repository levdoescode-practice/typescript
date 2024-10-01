import { createContext, useEffect, useState } from "react";
import Child from "./Child5";

type User = {
    id: string;
    name: string;
    age: number;
};

export const Context = createContext();

export default function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    return (
        <Context.Provider value={{users}}>
            <Child />
        </Context.Provider>
    );
}

function getUsers(): Promise<User[]> {
    return Promise.resolve([
        { id: crypto.randomUUID(), name: "John", age: 30 },
        { id: crypto.randomUUID(), name: "Jane", age: 25 },
    ]);
}
