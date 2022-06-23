/*
 *  To get you started, here's some properties of Bart.
 *  You need to add more properties to complete his
 *  representation as an object. Then add all the other
 *  fish to the collection.
 */
const database = {
    fish: [
        {
            species: "Tuna",
            length: 40,
            name: "Tina",
            origin: "Ocean",
            food: "<img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/1/13/Seaweed.png' alt='Stardew Valley Seaweed - pixel art style small seaweed plant' title='Stardew Valley Seaweed'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png' alt='pixel art style lightblue clam' title='Stardew Valley Clam'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png' alt='pixel art style dark gray small mussel shell' title='Stardew Valley Mussel'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/e/e7/Sea_Urchin.png' alt='Stardew Valley Sea Urchin - pixel art purple orb with eight spikes' title='Stardew Vally Sea Urchin'>",
            image: "https://stardewvalleywiki.com/mediawiki/images/c/c5/Tuna.png"
        }, 
        {
            species: "Bream",
            length: 16,
            name: "Barry",
            origin: "River",
            food: '<img style="height:2em" src="https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png" title="Stardew Valley Maple Syrup" alt="Stardew Valley Maple Syrup - pixel art style round orange bottle with white stripe across the middle">, <img style="height:2em" src="https://stardewvalleywiki.com/mediawiki/images/c/c6/Honey.png" title="Stardew Valley Honey" alt="Stardew Valley Honey - pixel art style yellow jar with white stripe across the middle and brown lid ">, <img style="height:2em" src="https://stardewvalleywiki.com/mediawiki/images/c/cd/Acorn.png" title="Stardew Valley Acorn" alt="Stardew Valley Acorn - pixel art style brown acorn">',
            image: "https://stardewvalleywiki.com/mediawiki/images/8/82/Bream.png"
        }, 
        {
            species: "Flounder",
            length: 10,
            name: "Philly",
            origin: "Ocean",
            food: "<img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/1/13/Seaweed.png' alt='Stardew Valley Seaweed - pixel art style small seaweed plant' title='Stardew Valley Seaweed'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/e/ed/Clam.png' alt='pixel art style lightblue clam' title='Stardew Valley Clam'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/a/aa/Mussel.png' alt='pixel art style dark gray small mussel shell' title='Stardew Valley Mussel'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/e/e7/Sea_Urchin.png' alt='Stardew Valley Sea Urchin - pixel art purple orb with eight spikes' title='Stardew Vally Sea Urchin'>",
            image: "https://stardewvalleywiki.com/mediawiki/images/8/85/Flounder.png"
        }, 
        {
            species: "Midnight Carp",
            length: 30,
            name: "Kerry",
            origin: "Cindersap Forest Pond",
            food: "<img src='https://stardewvalleywiki.com/mediawiki/images/2/2e/Common_Mushroom.png' style='height:2em' title='Stardew Valley Common Mushroom' alt='pixel art style brown mushroom'>, <img src='https://stardewvalleywiki.com/mediawiki/images/b/b6/Bug_Meat.png' style='height:2em' title='Stardew Valley Bug Meat' alt='pixel art style pink blob'>,<img src='https://stardewvalleywiki.com/mediawiki/images/d/d2/Snail.png' style='height:2em' title='Stardew Valley Snail' alt='pixel art style snail with green spiral shell'>, <img src='https://stardewvalleywiki.com/mediawiki/images/6/6d/Green_Algae.png' style='height:2em' title='Stardew Vally Green Algae' alt='pixel art style green three pronged dripping piece of algae'>",
            image: "https://stardewvalleywiki.com/mediawiki/images/3/33/Midnight_Carp.png"
        }, 
        {
            species: "Sturgeon",
            length: 33,
            name: "Sally",
            origin: "Mountain Lake",
            food: "<img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/0/05/Jelly.png' alt='pixel art style red jar with brown lid' title='Stardew Valley Jelly'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/6/6a/Maple_Syrup.png' alt='pixel art style round orange bottle with white stripe across the middle' title='Stardew Valley Maple Syrup'>, <img style='height:2em' src='https://stardewvalleywiki.com/mediawiki/images/c/c7/Pickles.png' alt='Pixel art style clear jar with whole green pickles inside and a brown lid' title='Stardew Valley Pickles'>",
            image: "https://stardewvalleywiki.com/mediawiki/images/4/42/Sturgeon.png"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const orderFish = (fishList) => {
    let orderedFish = [];

    for (const fish of fishList) {
        if (fish.length%3 == 0 && fish.length%5 !== 0 && !orderedFish.includes(fish)) {
            orderedFish.push(fish);
        } 
    }
    for (const fish of fishList) {
        if (fish.length%5 == 0 && fish.length%3 !== 0 && !orderedFish.includes(fish)) {
            orderedFish.push(fish);
        } 
    }
    for (const fish of fishList) {
        if (fish.length%5 !== 0 && fish.length%3 !== 0) {
            orderedFish.push(fish);
        } 
    }
    for (const fish of fishList) {
        if (fish.length%3 == 0 && fish.length%5 == 0 && !orderedFish.includes(fish)) {
            orderedFish.unshift(fish);
        } 
    }
    return orderedFish;
}