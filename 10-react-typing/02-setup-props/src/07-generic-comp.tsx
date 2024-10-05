import { List } from "./List";

export default function App() {
    return (
        <>
            <List
                items={[
                    { id: 1, name: "John" },
                    { id: 2, name: "Jane" },
                ]}
                getKey={(item) => item.id}
                renderItem={(item) => <div>{item.name}</div>}
            />
            {/* In case we need to specify the type */}
            <List<{ id: number; name: string; age?: number }>
                items={[
                    { id: 1, name: "John" },
                    { id: 2, name: "Jane", age: 25 },
                ]}
                getKey={(item) => item.id}
                renderItem={(item) => <div>{item.name}</div>}
            />
        </>
    );
}
