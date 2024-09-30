type ChildProps = {
    name: string;
};

// Using React.FC to define the type of the component as generic
export const Child2: React.FC<ChildProps> = ({ name }) => {
    return <p>{name}</p>;
};
