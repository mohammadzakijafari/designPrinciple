import { useState } from "react";
import '../index.css';
import DropDown from "../components/DropDown";

function DropDownPage () {
    // initializing select status state variable
    const [selection, setSelection] = useState(null);

    const options = [
        {
            label: "Red",
            value: "red",
        },
        {
            label: "Green",
            value: "green",
        },
        {
            label: "Blue",
            value: "blue",
        },
        {
            label: "Black",
            value: "black",
        },
    ]

    const handleSelect = (option) => {
        setSelection(option);
    }
    return (
        <div className="">
            <DropDown options = { options } value = { selection } onChange = { handleSelect } /> 
        </div>
    )
}

export default DropDownPage;