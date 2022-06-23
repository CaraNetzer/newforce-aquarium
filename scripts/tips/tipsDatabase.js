const database = {
    tips: [
        {
            text: "~> You may be tempted to keep moving once you reach floor 100 in the mines, but it may be worth your while to stick around for a bit - this is where you can catch Lava Eels! Of the non-Legendary Fish, Lava Eels are the fish with the highest sell price and the second most difficult fish to catch. They make great residants of fish ponds, offering you Roe, Gold Ore, Spicy Eel meals, and Magma Geodes."
        },
        {
            text: "~> A Legendary Fish can be caught if you cast your rod at the southern tip of the larger island in the Cindersap Forest."
        }
    ]
}

export const getTips = () => {
    return database.tips.map(tips => ({...tips}))
}