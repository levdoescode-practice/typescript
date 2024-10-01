import type { ComponentProps } from "react";
import Child4 from "./Child4";

type ButtonProps2 = {
    outline?: boolean;
} & ComponentProps<typeof Child4>;

export function Button2({ outline, city, zip, ...props }: ButtonProps2) {
    return (
        <>
            <button style={{ border: outline ? "1px solid black" : "none" }} {...props}></button>
            <p>{`${city} - ${zip}`}</p>
        </>
    );
}

// export function Button2({ outline, ...props }: ButtonProps2) {
//     return <button style={{ border: outline ? "1px solid black" : "none" }} {...props}></button>;
// }
