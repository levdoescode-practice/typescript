import { createContext, useContext, useEffect, useState } from "react";
import Child from "./Child5";

type User = {
    id: string;
    name: string;
    age: number;
};

type ContextType = {
    users: User[];
    addUser: ({ name, age }: { name: string; age: number }) => void;
};

const Context = createContext<ContextType | null>(null); // Add null as the default value

export function useUsers() {
    const usersContext = useContext(Context);
    if (usersContext === null) {
        throw new Error("Must be used within Provider");
    }

    return usersContext;
}

export default function App() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        getUsers().then(setUsers);
    }, []);

    function addUser({ name, age }: { name: string; age: number }) {
        setUsers((prevUsers) => {
            return [...prevUsers, { id: crypto.randomUUID(), name, age }];
        });
    }

    return (
        <Context.Provider value={{ users, addUser }}>
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
