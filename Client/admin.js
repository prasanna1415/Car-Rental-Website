
document.addEventListener('DOMContentLoaded', async function() {
    const availableCarsDiv = document.getElementById('available-cars');
    try {
        const response = await fetch('http://localhost:3000/post');
        const data = await response.json();
        if(response){
            availableCarsDiv.innerHTML = '';
        }
        

        data.forEach(car => {
            const carEntry = document.createElement('div');
            carEntry.className = 'car-entry';
            carEntry.dataset.id = car._id;  // Store the car ID

            carEntry.innerHTML = `
                <div class='carphoto'>
                    <img src="${car.imageUrl}" alt="${car.modelName}">
                </div>
                <h3>Name: ${car.modelName}</h3>
                <h2>Price per Day: Rs${car.price}</h2>
                <button class='deletebtn'>Delete</button>
            `;

            // Add delete button event listener
            carEntry.querySelector('.deletebtn').addEventListener('click', async function() {
                const carId = carEntry.dataset.id;
                try {
                    const deleteResponse = await fetch(`http://localhost:3000/post/${carId}`, {
                        method: 'DELETE'
                    });

                    if (!deleteResponse.ok) {
                        throw new Error(`HTTP error! Status: ${deleteResponse.status}`);
                    }

                    // Remove car entry from the DOM
                    carEntry.remove();
                } catch (error) {
                    console.error('Error deleting car:', error);
                }
            });

            availableCarsDiv.appendChild(carEntry);
        });
    } catch (error) {
        console.error('Error fetching data:', error);
        availableCarsDiv.innerHTML = '<p>Failed to load content.</p>';
    }
});

document.getElementById('add-car-button').addEventListener('click', async function(event) {
    const carPhotoInput = document.getElementById('car-photo');
    const carNameInput = document.getElementById('car-name');
    const pricePerDayInput = document.getElementById('price-per-day');

    const carPhoto = carPhotoInput.value;
    const carName = carNameInput.value;
    const pricePerDay = parseInt(pricePerDayInput.value);  // Ensure it's a number

    if (carName && pricePerDay && carPhoto) {
        const carEntry = document.createElement('div');
        carEntry.className = 'car-entry';

        const carPhotoText = carPhoto ? `post/${carPhoto.split('\\').pop()}` : '';

        try {
            const response = await fetch("http://127.0.0.1:3000/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ imageUrl: carPhotoText, modelName: carName, price: pricePerDay })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);

            // Add the new car entry to the page
            carEntry.innerHTML = `
                <div class='carphoto'>
                    <img src="${carPhotoText}">
                </div>
                <h3>Name: ${carName}</h3>
                <h2>Price per Day: Rs${pricePerDay}</h2>
                <button class='deletebtn'>Delete</button>
            `;

            carEntry.dataset.id = result._id;  // Store the new car ID

            // Add delete button event listener for the new car
            carEntry.querySelector('.deletebtn').addEventListener('click', async function() {
                const postId = carEntry.dataset.id;
                try {
                    const deleteResponse = await fetch(`http://127.0.0.1:3000/post/${postId}`, {
                        method: 'DELETE'
                    });

                    if (!deleteResponse.ok) {
                        throw new Error(`HTTP error! Status: ${deleteResponse.status}`);
                    }

                    // Remove car entry from the DOM
                    carEntry.remove();
                } catch (error) {
                    console.error('Error deleting post:', error);
                }
            });


            document.getElementById('available-cars').appendChild(carEntry);

            carPhotoInput.value = '';
            carNameInput.value = '';
            pricePerDayInput.value = '';
        } catch (err) {
            console.log("Error", err);
        }
    } else {
        alert('Please enter the car name, price per day, and car photo.');
    }
});

















// document.addEventListener('DOMContentLoaded', async function() {
//     const availableCarsDiv = document.getElementById('available-cars');
//     try {
//         const response = await fetch('http://localhost:3000/post');
//         const data = await response.json();

//         availableCarsDiv.innerHTML = '';

//         data.forEach(car => {
//             const carEntry = document.createElement('div');
//             carEntry.className = 'car-entry';

//             carEntry.innerHTML = `
//                 <div class='carphoto'>
//                     <img src="${car.imageUrl}" alt="${car.modelName}">
//                 </div>
//                 <h3>Name: ${car.modelName}</h3>
//                 <h2>Price per Day: Rs${car.price}</h2>
//                 <button class='deletebtn'>Delete</button>
//             `;

//             availableCarsDiv.appendChild(carEntry);
//         });
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         availableCarsDiv.innerHTML = '<p>Failed to load content.</p>';
//     }
// });



// document.getElementById('add-car-button').addEventListener('click', async function(event) {
//     const carPhotoInput = document.getElementById('car-photo');
//     const carNameInput = document.getElementById('car-name');
//     const pricePerDayInput = document.getElementById('price-per-day');

//     const carPhoto = carPhotoInput.value;
//     const carName = carNameInput.value;
//     const pricePerDay = parseInt(pricePerDayInput.value);  

//     if (carName && pricePerDay && carPhoto) {
//         const carEntry = document.createElement('div');
//         carEntry.className = 'car-entry';



//         const carPhotoText = carPhoto ? `post/${carPhoto.split('\\').pop()}` : '';

//         try {
//             const response = await fetch("http://127.0.0.1:3000/post", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({ imageUrl: carPhotoText, modelName: carName, price: pricePerDay })
//             });

//             if (!response.ok) {
//                 throw new Error(`HTTP error! Status: ${response.status}`);
//             }

//             const result = await response.json();
//             console.log(result);

           
//             carEntry.innerHTML = `
//                 <div class='carphoto'>
//                     <img src="${carPhotoText}">
//                 </div>
//                 <h3>Name: ${carName}</h3>
//                 <h2>Price per Day: Rs${pricePerDay}</h2>
//                 <button class='deletebtn'>Delete</button>
//             `;

//             document.getElementById('available-cars').appendChild(carEntry);

//             carPhotoInput.value = '';
//             carNameInput.value = '';
//             pricePerDayInput.value = '';
//         } catch (err) {
//             console.log("Error", err);
//         }
//     } else {
//         alert('Please enter the car name, price per day, and car photo.');
//     }
// });
