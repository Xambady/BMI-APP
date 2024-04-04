import {data} from "./data.js";
import { renderInfoContainer } from "./function.js"; 


let infoButton = document.querySelector('.info');
let infoContainer = document.querySelector('.info-container');
let closeButton = document.querySelector('.close-button');
let checkButton = document.querySelector('.check-button');
let weight = document.querySelector('.weight');
let height = document.querySelector('.height');
let dropDown = document.querySelector('.dropDown');

renderInfoContainer(infoButton, infoContainer, closeButton);

