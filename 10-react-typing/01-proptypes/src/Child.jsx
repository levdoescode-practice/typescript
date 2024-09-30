export default function Child({ name, age, children }) {
    return (
        <div>
            <strong>Name:</strong> {name}
            <br />
            <strong>Age:</strong> {age}
            <br />
            <strong>Age (in 10 years):</strong> {age + 10}
            <p>{children}</p>
        </div>
    );
}
