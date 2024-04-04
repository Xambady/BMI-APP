export function renderInfoContainer(infoButton, infoContainer, closeButton){
  infoButton.addEventListener('click', (e)=>{
    infoContainer.classList.add('show-info-container')
  });
  closeButton.addEventListener('click', ()=>{
    infoContainer.classList.remove('show-info-container')
  })
}