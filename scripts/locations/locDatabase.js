const database = {
    locations: [
        {
            img: '<img class="location" src="https://stardewvalleywiki.com/mediawiki/images/thumb/0/0c/CindersapForest.png/500px-CindersapForest.png" alt="map of Cindersap Forest during Spring" title="Map of Cindersap Forest during Spring">'
        },
        {
            img: '<img class="location" src="https://stardewvalleywiki.com/mediawiki/images/7/77/SecretWoodsPondFishingZones.png" alt="map of Fishing Zones in the Secret Woods Pond" title="Map of Secret Woods Pond fishing zones">'
        },
        {
            img: '<img class="location" src="https://cdn-images.win.gg/resize/w/500/format/webp/type/progressive/fit/cover/path/wp/uploads/2022/01/stardew-valley-lava-fishing.jpg" alt="Mines floor 100 fishing zone" title="Mines floor 100 fishing zone"></img>'
        }
    ]
}

export const getLocations = () => {
    return database.locations.map(locations => ({...locations}))
}