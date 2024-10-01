type ChildProps4 = {
    city: string;
    zip: number;
};

export default function Child4({ city, zip }: ChildProps4) {
    return <p>{`${city} - ${zip}`}</p>;
}
