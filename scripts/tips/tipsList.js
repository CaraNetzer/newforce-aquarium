import { getTips } from "./tipsDatabase.js"

export const tipsList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips();

    // Start building a string filled with HTML syntax
    let htmlString = '<h3>Travel Tips</h3>'

    // Create HTML representations of each fish here
    for (const tip of tips) {
        htmlString += `<p>${tip.text}</p>`;
    }

    return htmlString;
}