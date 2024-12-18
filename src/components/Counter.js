import { useReducer } from "react";
import Panel from "./Panel";

function Counter () {

    // initializing strings to a variable to prevent errro
    const INCREMENT_COUNT = 'increment';
    const DECREMENT_COUNT = 'decrement';
    const SET_VALUE_TO_ADD = 'change_value_to_add';
    const ADD_VALUE_TO_COUNT = 'add_value_to_count';

    const reducer = (state, action) => {
        // every should return a value and if not return a value, then it will return undefined
        switch(action.type) {
            case INCREMENT_COUNT:
                return {
                    ...state,
                    counter: state.counter + 1,
                };
            case DECREMENT_COUNT:
                return {
                    ...state,
                    counter: state.counter - 1,
                }
            case SET_VALUE_TO_ADD:
                return {
                    ...state,
                    valueToAdd: action.payload,
                }
            case ADD_VALUE_TO_COUNT:
                return {
                    ...state,
                    counter: state.counter + state.valueToAdd,
                    valueToAdd: 0
                }
            default:
                return state;
        }
    }
    // introducing and initializing use reducer
    // reducer is similar to use state and it makes easy to combine states which are closely related to each other and used together in future
    const [state, dispatch] = useReducer(reducer, {
        counter: 0,
        valueToAdd: 0,
    });
    console.log(state);
    // initializing state variable for counter
    // const [counter, setCounter] = useState(0);
    // const [valueToAdd, setValueToAdd] = useState(0);

    // handle increment click
    const handleIncrementClick = () => {
        // setCounter(counter + 1);
        dispatch({
            type: INCREMENT_COUNT
        });
    }

    // handle decrement click
    const handleDecrementClick = () => {
        // setCounter(counter - 1);
        dispatch({
            type: DECREMENT_COUNT,
        })
    }

    const handleInputChange = (event) => {
        let value = parseInt(event.target.value) || 0;
        // setValueToAdd(value);
        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // setCounter(counter + valueToAdd)
        dispatch({
            type: ADD_VALUE_TO_COUNT 
        });
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg"> Count is =  { state.counter } </h1>
            <div className="flex gap-10 mt-10">
                <button onClick = { handleIncrementClick } className="px-6 py-3 rounded bg-blue-500 text-white"> Increment </button>
                <button onClick = { handleDecrementClick } className="px-6 py-3 rounded bg-blue-500 text-white"> Decrement </button>
            </div>
            <form onSubmit = { handleSubmit }>
                <label> Add a lot </label>
                <input onChange = { handleInputChange } value = {state.valueToAdd || ""} type="number" className="p-1 m-3 bg-gray-50 border border-gray-300" />

                <button className="px-6 py-3 rounded bg-blue-500 text-white"> Add  </button>
            </form>
        </Panel>
    )
}

export default Counter;
