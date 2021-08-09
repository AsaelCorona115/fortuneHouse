const display = document.querySelector('.foodDisplay');
const selector = document.querySelector('.foodSelector');
const closeButton = document.querySelector('.btn-close');
const chosenFood = document.querySelector('.chosenFood')

selector.addEventListener('click', e=>{
    if(e.target.value){
        if(display.classList.contains('d-none')){
            display.classList.remove('d-none');
            display.classList.add('d-flex');
            chosenFood.setAttribute('src', `../dishes-img/${e.target.value}.jpg`);
        }
        
    }
})


closeButton.addEventListener('click', () =>{
    display.classList.add('d-none');
})