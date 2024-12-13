import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Accordion ({ items }) {
    // initializing a state variable for expansion or collapse of content
    const [expandedIndex, setExpandedIndex] = useState(-1);

    // handling expanded and collapsed section onclick
    const handleExpandedClick = (nextIndex) => {

        // functional update of state
        setExpandedIndex((currentExpandedIndex) => {
            if (currentExpandedIndex === nextIndex) {
                return -1;
            } else {
                return nextIndex;
            }
        });

        //--------------- Simple update of state

        // if(expandedIndex === nextIndex) {
        //     setExpandedIndex(-1);
        // } else {
        //     setExpandedIndex(nextIndex);
        // }
    }

    const renderedItems = items.map((item, index) => {
        // checking which index accordion should be expanded based on its index number
        const isExpanded = index === expandedIndex;

        // creating icon for expansion purpose
        const icon = (<span className="text-2xl"> { isExpanded ? <IoIosArrowDown /> : <IoIosArrowBack /> } </span>)
        return (
            <div key = { item.id } className="">
                <div onClick = {() => handleExpandedClick(index) } className="flex justify-between px-6 py-3 bg-gray-50 border-b items-center cursor-pointer text-xl">
                    { item.label }
                    { icon }
                </div>
                
                {isExpanded && <div className="border-b p-5"> {item.content} </div>}
            </div>
        )
    })
    return (
        <div className="border-x border-t rounded">
            { renderedItems }
        </div>
    )
}

export default Accordion;