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
    test1: PropTypes.bool,
    test2: PropTypes.array,
    test3: PropTypes.object, // any object
    test4: PropTypes.shape({
        street: PropTypes.string.isRequired,
        area_code: PropTypes.number.isRequired,
    }).isRequired,
    test5: PropTypes.arrayOf(PropTypes.number),
    test6: PropTypes.arrayOf(PropTypes.string),
    // Array of strings or numbers
    test7: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    // Similar to enum
    status: PropTypes.oneOf(["active", "inactive"]),
    // Strict shape, only has the specified props, no more, no less
    test8: PropTypes.exact({
        street: PropTypes.string.isRequired,
        area_code: PropTypes.number.isRequired,
    }),
};
