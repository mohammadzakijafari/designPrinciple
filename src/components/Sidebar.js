import Link from "./Link";

function Sidebar () {

    // Creating an array of label and path for links to show users
    const links = [
        { label: 'Dropdown', path: '/'},
        { label: 'Accordion', path: '/accordion'},
        { label: 'Buttons', path: '/buttons'},
        { label: 'Modal', path: '/modal'},
    ];

    // rendering links inside sidebar component
    const renderedLinks = links.map((link) => {
        return <Link 
            to = {link.path} 
            key = {link.label} 
            className = "mb-3" 
            activeClassName = "font-bold border-l-4 border-blue-500 pl-2"> { link.label } </Link>
    });

    return (
        <div className="sticky top-0 flex flex-col items-start">
            { renderedLinks }
        </div>
    )
}

export default Sidebar;