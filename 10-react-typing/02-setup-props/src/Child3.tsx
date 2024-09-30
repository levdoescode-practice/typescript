import type { ReactNode } from "react";

type ChildProps = {
    //children: string;
    //children: React.ReactNode;
    children?: ReactNode;
};

export default function Child({ children }: ChildProps) {
    return <p>{children}</p>;
}
