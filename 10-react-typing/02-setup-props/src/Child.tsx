type ChildProps = {
    name: string;
}

//export default function Child({name}: {name: string}) {
export default function Child({name}: ChildProps) {
    return <p>{name}</p>
}