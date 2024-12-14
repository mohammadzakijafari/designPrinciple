import { createContext, useEffect, useState } from "react";

const NavigationContext = createContext();

function NavigationProvider ({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    // using useEffect to capture the back and forward move of users for better navigation
    useEffect(() => {
        const handler = () => {
            setCurrentPath(window.location.pathname);
        };

        window.addEventListener('popstate', handler);

        // returning clean up function to remove current path incase of hard refresh
        return () => {
            window.removeEventListener('popstate', handler);
        };

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{ currentPath, navigate }}>
            { children }
        </NavigationContext.Provider>
    )
}
export { NavigationProvider };
export default NavigationContext;