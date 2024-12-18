import Table from "./Table";
import { TiArrowDownThick } from "react-icons/ti";
import { TiArrowUpThick } from "react-icons/ti";
import useCounter from "../hooks/use-counter";


function SortableTable (props) {

    const { config, data } = props;

    // accessing our custom hook which is useCounter hook
    const { sortOrder, sortBy, sortedData, handleSortClick } = useCounter(data, config);

    // here we are not modifying the props but we can add some functions to it
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => <th onClick={() => handleSortClick(column.label)}>
                <div className="flex items-center">
                    {getIcons(column.label, sortBy, sortOrder)}
                    {column.label} 
                </div>
            </th>
        }
    });

    return (
        <div>
            <Table {...props} data = { sortedData } config = { updatedConfig } />
        </div>
    )
}

// function that shows icons in table header based on sorting order
function getIcons (label, sortBy, sortOrder) {
    if (label !== sortBy) {
        return <div> <TiArrowUpThick /> <TiArrowDownThick /> </div>
    }

    if(sortOrder === null) {
        return <div> <TiArrowUpThick /> <TiArrowDownThick /> </div>
    } else if (sortOrder === 'asc') {
        return <div> <TiArrowUpThick /> </div>
    } else if (sortOrder === 'desc') {
        return <div> <TiArrowDownThick /> </div>
    }
}

export default SortableTable;