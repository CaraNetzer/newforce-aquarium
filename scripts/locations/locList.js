import { getLocations } from "./locDatabase.js"

export const locationsList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations();

    // Start building a string filled with HTML syntax
    let htmlString='';

    // Create HTML representations of each fish here
    for (const location of locations) {
        htmlString += `${location.img}`;
    }

    return htmlString;
    
}