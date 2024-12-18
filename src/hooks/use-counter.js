import { useState } from "react";

function useCounter (data, config) {

    // initializing state variable for sort values
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    // handling click when to sort
    const handleSortClick = (label) => {

        // specifying which label is selected from the several labels that is not the same label two times clicked
        if (sortBy && label !== sortBy) {
            setSortOrder('asc');
            setSortBy(label);
            return;
        }

        // specifying the sort order (asc - desc - null)
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
    };

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
    };

    return {
        sortOrder,
        sortBy,
        sortedData,
        handleSortClick
    };
}

export default useCounter;