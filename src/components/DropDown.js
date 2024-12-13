import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

function DropDown ({ options, value, onChange }) {
    // setting isOpen state variable to false
    const [isOpen, setIsOpen] = useState(false);

    const handleSelectClick = () => {
        setIsOpen(!isOpen);
    }

    const handleOptionClick = (option) => {
        setIsOpen(false);
        onChange(option)
    }

    // rendering options to the dropdown while selection
    const renderedOptions = options.map((option) => {
        return <div key = { option.value } onClick = {() => handleOptionClick(option) } className="hover:bg-sky-100 rounded cursor-pointer p-1"> { option.label } </div>
    });
    return (
        <div className="w-48 relative"> 
            <div onClick = {() => handleSelectClick(options) } className="flex justify-between items-center cursor-pointer border rounded p-3 bg-white w-full">
                {value?.label || "Select ..."} 
                <IoIosArrowDown />
            </div>
            {isOpen && <div className="absolute top-full border rounded p-3 shadow bg-white w-full"> { renderedOptions } </div>}
        </div>
    )
}

export default DropDown;