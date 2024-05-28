document.addEventListener("DOMContentLoaded", function() {
    const pickupDateInput = document.getElementById("pickup-date");
    const returnDateInput = document.getElementById("return-date");
  
    const today = new Date().toISOString().split('T')[0];
    pickupDateInput.setAttribute("min", today);
  
    pickupDateInput.addEventListener("change", function() {
        returnDateInput.setAttribute("min", this.value);
    });
    

    history.pushState(null, null, location.href);

    // Handle the back button
    window.addEventListener("popstate", function(event) {
        history.pushState(null, null, location.href);
    });


    const urlParams = new URLSearchParams(window.location.search);
    const modelName = urlParams.get('model');
    const price = urlParams.get('price');


    document.querySelector('#form-details').addEventListener('submit', async (event)=>{
        event.preventDefault();
        const pickupDate = document.getElementById("pickup-date").value;
        const returnDate = document.getElementById("return-date").value;
        const location = document.getElementById("location").value;
        const phone = document.getElementById("phone").value;


        try{
            const response = await fetch('http://127.0.0.1:3000/book',{
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ pickupDate,returnDate,location,phone})
            });


            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }


            const result = await response.json();
            alert(result.message);

            document.getElementById("pickup-date").value = '';
            document.getElementById("return-date").value = '';
            document.getElementById("location").value = '';
            document.getElementById("phone").value = '';
            window.location.href = 'theindex.html';
        }catch(e){
            console.log(`Something happened: ${e}`);
        }
        console.log(pickupDate,pickupDate,pickupDate,phone)
        console.log(modelName);
        console.log(price);
    })
});