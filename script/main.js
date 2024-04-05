import {data} from "./data.js";
import { renderInfoContainer, calculateBMI, displayResult  } from "./function.js"; 


let infoButton = document.querySelector('.info');
let infoContainer = document.querySelector('.info-container');
let closeButton = document.querySelector('.close-button');
let checkButton = document.querySelector('.check-button');
let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
let dropDown = document.querySelector('.dropDown');
let screen = document.querySelector('.screen')

renderInfoContainer(infoButton, infoContainer, closeButton);

checkButton.addEventListener('click', ()=>{
  screen.innerHTML = displayResult(calculateBMI, weight, height, data) || "You have not input any values.";
  weight.value = '';
  height.value = '';

})

console.log(dropDown)