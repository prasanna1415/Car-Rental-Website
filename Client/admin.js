

document.addEventListener('DOMContentLoaded', async function() {
    const availableCarsDiv = document.getElementById('available-cars');
    try {
        const response = await fetch('http://localhost:3000/post');
        const data = await response.json();

        availableCarsDiv.innerHTML = '';

        data.forEach(car => {
            const carEntry = document.createElement('div');
            carEntry.className = 'car-entry';

            carEntry.innerHTML = `
                <div class='carphoto'>
                    <img src="${car.imageUrl}" alt="${car.modelName}">
                </div>
                <p>Name: ${car.modelName}</p>
                <p>Price per Day: Rs${car.price}</p>
            `;

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
                <p>Name: ${carName}</p>
                <p>Price per Day: Rs${pricePerDay}</p>
            `;

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
