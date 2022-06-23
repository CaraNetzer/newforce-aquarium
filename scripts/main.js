import { FishList } from './fish/FishList.js'
import { locationsList } from './locations/locList.js'
import { tipsList } from './tips/tipsList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let fishParent = document.querySelector(".all-fish");
let locationsParent = document.querySelector(".flex-locations");
let tipsParent = document.querySelector(".quotes");

fishParent.innerHTML = FishList();
locationsParent.innerHTML = locationsList();
tipsParent.innerHTML = tipsList();