"use strict";

import { tinga, bean_mix } from "./ingredients.js";

const recipeObj = {
    "tinga" : {
        "ingredients" : tinga,
        "count" : 0,
    },
    "bean-mix" : {
        "ingredients" : bean_mix,
        "count" : 0,
    },
}


function clearShoppingList() {
    const container = document.querySelector(".shopping-list-area");

    container.innerHTML = ""
}


function createListFromRecipeObject(recipeObj) {

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
    const cardArr = Array.from(document.querySelectorAll(".recipe-card"))
    cardArr.map( card => {
        const input = card.querySelector("input");

        // it will be named <RECIPE>-count
        const recipeName = input.name.slice(0, -6);

        recipeObj[recipeName]["count"] = input.value;
    })
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