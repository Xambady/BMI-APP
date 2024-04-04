// import { renderInfoContainer } from "./function"; 

let infoButton = document.querySelector('.info');
let infoContainer = document.querySelector('.info-container');
let closeButton = document.querySelector('.close-button');

// renderInfoContainer(infoButton, infoContainer, closeButton);
infoButton.addEventListener('click', (e)=>{
  infoContainer.classList.add('show-info-container')
});

closeButton.addEventListener('click', ()=>{
  infoContainer.classList.remove('show-info-container')
})