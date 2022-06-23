// Import the function that returns a copy of the fish array
import { getFish } from "./database.js"
import { orderFish } from "./database.js"

export const FishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish();
    const orderedFishes = orderFish(fishes);

    // Start building a string filled with HTML syntax
    let htmlString = '<h2>Fish in My Collection</h2>'

    // Create HTML representations of each fish here
    for (const fish of orderedFishes) {
        htmlString += `<section class="fish">
            <div class="fish-image"><img  class="pic" src="${fish.image}" ' alt='Tuna from Stardew Valley'/></div>
            <div><div class="fish__name"><b>Name</b>: ${fish.name}\n</div>
            <div class="fish__species"><b>Species</b>: ${fish.species}\n</div>
            <div class="fish__length"><b>Length</b>: ${fish.length} inches\n</div>
            <div class="fish__location"><b>Found In</b>: ${fish.origin}\n</div>
            <div class="fish__diet"><b>Diet</b>: ${fish.food}\n</div></div>
        </section>`;
    }

    return htmlString;
}