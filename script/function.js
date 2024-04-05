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
  let heightmeter = height * 0.305;
  let heightSquared = heightmeter * heightmeter;
  result = weight/heightSquared
  return result.toFixed(2);

}

//This function receives the result from calculateBMI function and decides the output that suits the users input

export function displayResult(calculateBMI, weight, height, data){
  let result = calculateBMI(weight.value, height.value);
  if (result < 18.5){
    
    return ` <p> Your BMI is <span class="result-display-red">${result}</span></P>
    <p class="result-display-red">${data.sorry}</p>
    <p class='advice'>${data.underweight}</p>`
   }
  else if (result >= 18.5 && result < 25){
    return ` <p> Your BMI is <span class="result-display">${result}</span></P>
    <p class="result-display">${data.congratulations}</P>
    <p class='advice'>${data.healthy}</p>`
  }
  else if(result >= 25 && result < 30 ){
    return ` <p> Your BMI is <span class="result-display-pink">${result}</span></P>
    <p class="result-display-pink">${data.hmm}</P>
    <p class='advice'>${data.overweight}</p>`
  }
  else if (result >= 30){
    return ` <p> Your BMI is <span class="result-display-red">${result}</span></P>
    <p class="result-display-red">${data.sorry}</P>
    <p class='advice'>${data.obese}</p>`
  }

}