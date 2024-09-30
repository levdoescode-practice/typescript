import { Button } from "./Button";
import Child from "./Child";
import { Child2 } from "./Child2";
import Child3 from "./Child3";

export default function App() {
    return (
        <>
            <Child name="Leo" />
            <Child2 name="Leo" />
            <Child3>Children</Child3> // Ok
            {/* <Child3> <p>Children here</p>  </Child3> // Not ok if the type is just string */}
            <Child3>
                <p>Children here</p>
            </Child3>
            {/* // Ok if the type is ReactNode */}

            <Button outline>This is a button</Button>
            {/* // Now we can pass any props that a button element can accept. */}
        </>
    );
}
