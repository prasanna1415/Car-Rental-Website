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

        const urlParams = new URLSearchParams(window.location.search);
        const carId = urlParams.get('carID');
        const carPhotoText = carPhoto ? `post/${carPhoto.split('\\').pop()}` : '';
        
        try{
            const response = await fetch(`http://localhost:3000/updatephoto/${carId}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ imageUrl: carPhotoText  })

            })
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }catch(e){
            console.log(e);
        }
    }
})


priceBtn.addEventListener('click',async()=>{
    const carPrice = carPriceInput.value;
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('carID');
    if(carPrice){
        if(carPrice <0 ){
            alert("cannot be less than zero");
        }else{


            try{
                const response = await fetch(`http://localhost:3000/updateprice/${carId}`,{
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ price : carPrice })
    
                })
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
    
            }catch(e){
                console.log(e);
            }

        }



    }
})


carNameBtn.addEventListener('click',async()=>{
    const carName = carModelInput.value;
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('carID');
    if(carName){

        try{
            const response = await fetch(`http://localhost:3000/updatename/${carId}`,{
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ modelName : carName })

            })
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
        }catch(e){
            console.log(e);
        }
    }
})

