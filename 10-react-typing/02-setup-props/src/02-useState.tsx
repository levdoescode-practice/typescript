import { useState } from "react";

export default function App2() {
    const [value, setValue] = useState(""); // string is inferred
    const [value2, setValue2] = useState(); // undefined is inferred
    const [value3, setValue3] = useState<string>(); // string | undefined is inferred
    const [value4, setValue4] = useState<string | undefined>(); // string | undefined is inferred
    const [value5, setValue5] = useState([]); // never is inferred
    const [value6, setValue6] = useState([3]); // number[] is inferred
    const [value7, setValue7] = useState<number[]>([]); // number[]

    return (
        <>
            <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
            <input type="text" value={value2} onChange={(e) => setValue2(e.target.value)} />
            <input type="text" value={value3} onChange={(e) => setValue3(e.target.value)} />
            <input type="text" value={value4} onChange={(e) => setValue4(e.target.value)} />
            <input type="text" value={value5} onChange={(e) => setValue5(e.target.value)} />
            <input type="text" value={value6} onChange={(e) => setValue6(e.target.value)} />
            <input type="text" value={value7} onChange={(e) => setValue7(e.target.value)} />
        </>
    );
}
