import "./App.css";
import Child from "./Child";

export default function App() {
    return (
        <Child name="John" age={30} test4={{ street: "York", area_code: 100001 }}>
            Hi, this is John
        </Child>
    );
}
