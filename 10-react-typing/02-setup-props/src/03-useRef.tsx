import { useRef } from "react";

export default function App3() {
    // Ref must be a callback, a ref or null, not undefined which is what useRef() results in
    const inputRef1 = useRef(); // returns undefined
    const inputRef2 = useRef(null); // returns a read-only ref
    const inputRef3 = useRef<HTMLInputElement>(null); // returns a read-only ref using a generic
    const value = useRef<number>(); // we can mutate the value of the ref
    const value2 = useRef(0); // We can omit the generic if we initialize the ref with a value, it will infer the type

    inputRef3.current?.focus();
    value.current = 5;
    value2.current = 5;

    // ref prop can be undefined or LegacyRef<T>
    // LegacyRef can be a callback, a RefObject or null.
    // So when passing this prop, we can pass a ref object or a callback or null
    // but never undefined
    return <input ref={inputRef3} />;
}
