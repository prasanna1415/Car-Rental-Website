
//update options

const photo = document.querySelector('.photo');
const price = document.querySelector('.price');
const carName = document.querySelector('.modelname');

//change div

const picture = document.querySelector('.picture');
const carPrice = document.querySelector('.money');
const carModel = document.querySelector('.carname');

//main div

const mainDiv = document.querySelector('.main');

//close button
const closeBtn = document.querySelectorAll('.close-btn');




photo.addEventListener('click',()=> {
    picture.style.zIndex = 1;
    mainDiv.style.zIndex = 0;
} )

price.addEventListener('click',()=> {
    carPrice.style.zIndex = 1;
    mainDiv.style.zIndex = 0;
} )

carName.addEventListener('click',()=> {
    carModel.style.zIndex = 1;
    mainDiv.style.zIndex = 0;
} )


closeBtn.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        mainDiv.style.zIndex = 1;
        picture.style.zIndex = 0;
        carPrice.style.zIndex = 0;
        carModel.style.zIndex = 0;
    })
})