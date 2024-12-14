import { useEffect, useRef, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Panel from "./Panel";

function DropDown ({ options, value, onChange }) {
    // setting isOpen state variable to false
    const [isOpen, setIsOpen] = useState(false);
    // useRef is used for the purpose of referencing elements inside our DOM
    const divEl = useRef();

    // useEffect is used to render elements based on time
    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return;
            }

            if (!divEl.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener('click', handler, true);

        // This is a clean up function used in useEffect to clean up the 
        return () => {
            document.removeEventListener('click', handler);
        }
    }, []);

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
        <div ref = {divEl} className="w-48 relative"> 
            <Panel onClick = {() => handleSelectClick(options) } className="flex justify-between items-center cursor-pointer">
                {value?.label || "Select ..."} 
                <IoIosArrowDown />
            </Panel>
            {isOpen && <Panel className="absolute top-full"> { renderedOptions } </Panel>}
        </div>
    )
}

export default DropDown;