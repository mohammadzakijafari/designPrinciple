import { Fragment } from "react";

function Table ({ data, config, keyFn }) {

    // creating and rendering table header in the fly
    const renderedHeaders = config.map((column) => {
        // if we want to make table header more dynamic
        if (column.header) {
            return <Fragment key = {column.label}>{column.header()}</Fragment>;
        }

        // data rendered from table page
        return <th key={column.label}> { column.label } </th>
    });

    // rendering each row data from table page
    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2" key = { column.label }> { column.render(rowData) } </td>;
        });
        return (
            <tr className="border-b"  key = { keyFn(rowData) }>{renderedCells}</tr>
        );
    });

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">{renderedHeaders}</tr>
            </thead>
            <tbody>
                { renderedRows }
            </tbody>
        </table>
    )
}

export default Table;