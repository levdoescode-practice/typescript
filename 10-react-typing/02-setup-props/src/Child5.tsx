import { useContext } from "react";
import { Context } from "./05-useContext";

export default function Child() {
    const { users } = useContext(Context);
    return (
        <ul>
            {users.map((user) => {
                return <li key={user.id}>{user.name}</li>;
            })}
        </ul>
    );
}
