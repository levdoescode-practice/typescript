import PropTypes from "prop-types";

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

Child.propTypes = {
    name: PropTypes.string, // optional
    age: PropTypes.number.isRequired,
    //children: PropTypes.element // only one child (react element)
    children: PropTypes.node, // any type of children
};
