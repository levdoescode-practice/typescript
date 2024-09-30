import type { ComponentProps } from "react";
// This imports the ComponentProps type from the react module.

type ButtonProps = {
    outline?: boolean;
} & ComponentProps<"button">;
// This creates a new type ButtonProps that extends the ComponentProps<"button"> type.
// The ButtonProps type has an additional property outline that is optional.

export function Button({ outline, ...props }: ButtonProps) {
    return <button style={{ border: outline ? "1px solid black" : "none" }} {...props}></button>;
}
