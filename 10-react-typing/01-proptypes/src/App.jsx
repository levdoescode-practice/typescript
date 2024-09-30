import "./App.css";
import Child from "./Child";

export default function App() {
    return (
        <Child name="John" age={30}>
            Hi, this is John
        </Child>
    );
}
