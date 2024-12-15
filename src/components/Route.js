import useNavigation from "../hooks/use-navigation";

function Route ({ path, children }) {
    // Accessing the current path from context that we have created previously
    const { currentPath } = useNavigation();

    // checking if this path is equal to the current path and display the relevant content
    if (path === currentPath) {
        return children;
    }
    return null;    
}

export default Route;