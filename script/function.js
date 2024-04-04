/*This file contains individual functions that we will use on our main js file. This is done for code  */

//this function makes the information container slide from above when you click on the info element on the page. 
export function renderInfoContainer(infoButton, infoContainer, closeButton){
  infoButton.addEventListener('click', (e)=>{
    infoContainer.classList.add('show-info-container')
  });
  closeButton.addEventListener('click', ()=>{
    infoContainer.classList.remove('show-info-container')
  })
}


//This function collects values from our input and calculate the BMI
export function calculateBMI(weight, height){
  let result;
  let heightSquared = height * height;
  result = weight/heightSquared
  return result;
}

//This function receives the result from calculateBMI function and decides the output that suits the users input

function displayResult(calculateBMI, racialBackground, ){
  let result = calculateBMI();
  let racialBackground = racialBackground.value;
  if (racialBackground === 'Asian' || 'African' || "African Caribean"){ if (result )

  }
}