import { useUsers } from "./05-useContext";

export default function Child() {
    const { users } = useUsers();
    return (
        <ul>
            {users.map((user) => {
                return <li key={user.id}>{user.name}</li>;
            })}
        </ul>
    );
}
