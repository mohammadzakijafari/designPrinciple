import { useState } from "react";
import Table from "./Table";
import { TiArrowDownThick } from "react-icons/ti";
import { TiArrowUpThick } from "react-icons/ti";


function SortableTable (props) {
    // initializing state variable for sort values
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const { config, data } = props;

    // handling click when to sort
    const handleSortClick = (label) => {

        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }


        if (sortOrder === null) {
            setSortOrder('asc');
            setSortBy(label);
        } else if (sortOrder === 'asc') {
            setSortOrder('desc');
            setSortBy(label);
        } else if (sortOrder === 'desc') {
            setSortOrder(null);
            setSortBy(null);
        }
    }

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

    // Only sort data if sortOrder && sortBy are not null
    // Make a copy of data prop -- because we are not allowed to change any array of object passed as prop
    // Find the correct sortValue function and use it for sorting

    // getting the data prop and string to sortedData
    let sortedData = data;
    if (sortOrder && sortBy) {

        // here we are getting the value of sort which means the sort should be applied by which column
        const { sortValue } = config.find(column => column.label === sortBy);
        // getting the data and applying the sort operation
        sortedData = [...data].sort((a,b) => {
            // this is the actual data coming from table content and we get it based on column
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            // here we get the sorted order which will be asc or desc
            const reverseOrder = sortOrder === 'asc' ? 1: -1;
            if (typeof(valueA) === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return (
        <div>
            {sortOrder} - {sortBy}
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