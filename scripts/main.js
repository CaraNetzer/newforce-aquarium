import { FishList } from './fish/FishList.js'

/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
 */
let parentHTMLElement = document.querySelector(".all-fish");

parentHTMLElement.innerHTML = FishList();