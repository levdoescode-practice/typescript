import { useReducer } from "react";

type State = { count: number };

type Action =
    | {
          type: "increment";
          increaseBy: number;
      }
    | { type: "decrement"; decreaseBy: number };

function reducer(state: State, action: Action) {
    switch (action.type) {
        case "increment":
            return { ...state, count: state.count + action.increaseBy };
        case "decrement":
            return { ...state, count: state.count - action.decreaseBy };
        default:
            throw new Error();
        // return state;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <>
            <button onClick={() => dispatch({ type: "decrement", decreaseBy: 2 })}>-</button>
            Count: {state.count}
            <button onClick={() => dispatch({ type: "increment", increaseBy: 1 })}>+</button>
        </>
    );
}
