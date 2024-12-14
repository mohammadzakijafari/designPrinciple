import { useContext } from "react";
import NavigationContext from "../context/Navigation";

function Route ({ path, children }) {
    // Accessing the current path from context that we have created previously
    const { currentPath } = useContext(NavigationContext);

    // checking if this path is equal to the current path and display the relevant content
    if (path === currentPath) {
        return children;
    }
    return null;    
}

export default Route;