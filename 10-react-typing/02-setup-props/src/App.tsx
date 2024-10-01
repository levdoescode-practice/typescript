import { Button } from "./Button";
import { Button2 } from "./Button2";
import Child from "./Child";
import { Child2 } from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";

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

            <Button2 outline city="Dublin" zip={123} >Button21</Button2>
            <Button2 outline city="Dublin" zip={123} >Button22</Button2>
            {/* // Button with custom props */}

            <Child4 city="Dublin" zip={123} />
        </>
    );
}
