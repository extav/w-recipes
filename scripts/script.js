"use strict";

import { tinga } from "./ingredients.js";

const recipeObj = {
    "tinga" : {
        "ingredients" : tinga,
        "count" : 0,
    }
}





function clearShoppingList() {
    const container = document.querySelector(".shopping-list-area");

    container.innerHTML = ""
}

function createListFromRecipeObject(recipeObj) {

    // make the ingredient list 

    const ingredientList = {};
    for (let recipe in recipeObj) {

        const ingredObj = recipeObj[recipe]["ingredients"];
        const count = recipeObj[recipe]["count"];

        if (count > 0){
    
            for (let ingredient in ingredObj) {
                const num_used = ingredObj[ingredient];
                if (ingredient in ingredientList) {
                    ingredientList[ingredient] += num_used*count;
                } else {
                    ingredientList[ingredient] = num_used*count;
                }
            }
        }

    }

    return ingredientList;
}

function addShoppingListToPage(shoppingList) {
    const container = document.querySelector(".shopping-list-area");
    const list = document.createElement("ul");

    for (let item in shoppingList) {

        const entry = document.createElement("li");
        entry.textContent = shoppingList[item] + " " + item
        list.appendChild(entry);
    }

    container.appendChild(list);
}

function updateRecipeObj() {
    // for now its just tinga
    const formValue = document.querySelector("#tinga-count").value
    recipeObj["tinga"]["count"] = formValue;
}


function modifyShoppingList() {
    updateRecipeObj();
    clearShoppingList();
    addShoppingListToPage(
        createListFromRecipeObject(recipeObj)
    );
}

// get the button working
const btn = document.querySelector(".btn-list-maker");
btn.addEventListener("click", modifyShoppingList);