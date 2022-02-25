'use strict'

let banner = document.getElementById('banner');
let banner2 = document.getElementById('banner2');
let formFlex = document.querySelector('#recipeForm');
let servings = document.querySelector('h3');
let button = document.querySelectorAll('button');
let servingQuantity = 6;
let milkCheckbox = document.createElement('label');
let creamCheckbox = document.createElement('label');
let mascarponeCheckbox = document.createElement('label');
let gSugarCheckbox = document.createElement('label');
let saltCheckbox = document.createElement('label');
let eggsCheckbox = document.createElement('label');
let figsCheckbox = document.createElement('label');
let lemonCheckbox = document.createElement('label');
let bSugarCheckbox = document.createElement('label');
let waterCheckbox = document.createElement('label');
let butterCheckbox = document.createElement('label');
let pecanCheckbox = document.createElement('label');



let imageString = "";
for (let i = 0; i < 930; i++) {
    imageString += '<img src="img/hr-img.png" alt="">';
}

banner.innerHTML = imageString;
banner2.innerHTML = imageString;

let printButton = document.getElementById('print');

console.log(printButton);

function printFunction() {
    window.print();
}

printButton.addEventListener('click', printFunction);

const recipe = {
    milkNum: 1.5,
    creamNum: 1.5,
    mascarponeNum: 0.5,
    gSugarNum: 0.3,
    saltNum: 0.5,
    eggsNum: 2,
    figNum: 1,
    lemonNum: 1,
    bSugar: 0.5,
    butterNum: 2,
    waterNumOne: 2,
    waterNumTwo: 4,
    pecanNum: 1,
    ingredientsArray: [],
    pushIngredientsArray: function () {
        this.ingredientsArray.push(recipe.milkNum, this.creamNum, this.mascarponeNum, this.gSugarNum,
            this.saltNum, this.eggsNum, this.figNum, this.lemonNum, this.bSugar,
            this.butterNum, this.waterNumOne, this.waterNumTwo, this.pecanNum);
    },
    renderInnerHTML: function () {
        milkCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[0]} cups milk`;
        creamCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[1]} cup heavy cream`;
        mascarponeCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[2]} cup mascarpone`;
        gSugarCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[3]} cup mascarpone`;
        saltCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[4]} tsp pink salt`;
        eggsCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[5]} eggs yolk`;
        figsCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[6]} lb black mission figs`;
        lemonCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[7]} lemon, juiced`;
        bSugarCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[8]} cup brown sugar`;
        butterCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[9]} tbsp butter`;
        waterCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[10]}-${recipe.ingredientsArray[11]} tbsp water`;
        pecanCheckbox.innerHTML = `<input type='checkbox'>  ${this.ingredientsArray[12]} cup honey roasted pecans, roughly chopped`;
        servings.textContent = `${servingQuantity} servings`;
    },
    renderRecipe: function () {
        this.renderInnerHTML()
        formFlex.append(milkCheckbox, creamCheckbox, mascarponeCheckbox, gSugarCheckbox, saltCheckbox,
            eggsCheckbox, figsCheckbox, lemonCheckbox, bSugarCheckbox, butterCheckbox, waterCheckbox, pecanCheckbox);
    }
}

recipe.pushIngredientsArray();
recipe.renderRecipe()

function add() {
    servingQuantity *= 2;
    for (let i = 0; i < recipe.ingredientsArray.length; i++) {
        recipe.ingredientsArray[i] *= 2;
    }
    recipe.renderInnerHTML()
}

function substract() {
    if (servingQuantity > 7) {
        servingQuantity /= 2;
        for (let i = 0; i < recipe.ingredientsArray.length; i++) {
            recipe.ingredientsArray[i] /= 2;
        }
        recipe.renderInnerHTML()
    } else {
        alert('Minimum serving is 6');
    }
}

button[0].addEventListener('click', add);
button[1].addEventListener('click', substract);

//Strikethrough checked ingredients
let allIngredients = document.querySelectorAll('label');

function crossOut(event) {
    this.classList.toggle('checked');

}

function loopOne() {
    for (let i = 0; i < allIngredients.length; i++) {
        allIngredients[i].addEventListener('change', crossOut);
        console.log('hi')
    }
}

loopOne();

console.log(allIngredients)