"use strict";

import { recipes } from "./page_json.js";

const bod = document.querySelector("body");

console.log(Object.keys(recipes))
if ( Object.keys(recipes).includes( bod.dataset.recipe ) ) {
    console.log( "found the recipe! ")
    const r = bod.dataset.recipe;

    //set the title
    const ptit = document.querySelector("#pagetitle")
    console.log(ptit)
    ptit.innerHTML = recipes[r]["title"]

    // set the description
    const pdesc = document.querySelector("#desc")
    pdesc.innerHTML = recipes[r]["description"]

    // set the img details
    const img = document.querySelector("#recipeimg")
    img.src = recipes[r]["imgsrc"]
    img.alt = recipes[r]["imgalt"]
    
    // set the ingredients
    const inglist = document.querySelector("#ingred")
    inglist.innerHTML = recipes[r]["ingredients"]

    // set the instructions
    const instlist = document.querySelector("#instruc")
    instlist.innerHTML = recipes[r]["instructions"]

}
