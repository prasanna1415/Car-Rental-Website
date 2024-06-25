const pictureInput = document.querySelector('.updated-photo');
const carPriceInput= document.querySelector('.updated-price');
const carModelInput = document.querySelector('.updated-name');

//submit btn for each element
const photoBtn = document.querySelector('.photo-submit');
const priceBtn = document.querySelector('.number-submit');
const carNameBtn = document.querySelector('.modelname-submit');



photoBtn.addEventListener('click',async()=>{

    const carPhoto = pictureInput.value;
    
    


    if(carPhoto){
        
        try{
            const response = await fetch(' backend link here',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ imageUrl: carPhoto })
            })
        }catch(e){
            console.log(e);
        }
    }
})


priceBtn.addEventListener('click',()=>{
    const carPrice = carPriceInput.value;
    if(carPrice){
        try{

        }catch(e){

        }

    }
})


carNameBtn.addEventListener('click',()=>{
    const carName = carModelInput.value;
    if(carName){
        try{

        }catch(e){

        }
    }
})

