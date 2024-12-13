import DropDown from "../components/DropDown";

function DropDownPage () {
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
    return (
        <div className="">
            <DropDown options = { options } />
        </div>
    )
}

export default DropDownPage;