


// document.addEventListener("DOMContentLoaded", async function() {
//     const parentContainer = document.getElementById('parent-container');

//     try {
//         const response = await fetch('http://localhost:3000/getPost');
//         const postCount = await response.json();

//         for (let i = 0; i < postCount; i++) {
//             try {
//                 const response = await fetch('http://localhost:3000/post');
//                 const data = await response.json();

//                 data.forEach(car => {
//                     const childDiv = document.createElement('div');
//                     childDiv.className = 'box';

//                     childDiv.innerHTML = `
//                         <div class='box-image'>
//                             <img src="${car.imageUrl}" alt="${car.modelName}">
//                         </div>
//                         <h3>${car.modelName}</h3>
//                         <h2>Rs${car.price}</h2>
//                         <a class="btn">Rent Now</a>
//                     `;

//                     parentContainer.appendChild(childDiv);
//                 });
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 parentContainer.innerHTML = '<p>Failed to load content.</p>';
//             }
//         }
//     } catch (error) {
//         console.error('Error fetching post count:', error);
//         parentContainer.innerHTML = '<p>Failed to load content.</p>';
//     }
// });


document.addEventListener("DOMContentLoaded", async function() {
    const parentContainer = document.getElementById('parent-container');



        try {
            // Fetch the post data
            const postResponse = await fetch('http://localhost:3000/post');
            const data = await postResponse.json();
        
            data.forEach(car => {
                const childDiv = document.createElement('div');
                childDiv.className = 'box';
        
                childDiv.innerHTML = `
                    <div class='box-image'>
                        <img src="${car.imageUrl}" alt="${car.modelName}">
                    </div>
                    <h3>${car.modelName}</h3>
                    <h2>Rs${car.price}</h2>
                    <a class="btn" href="#" data-price="${car.price}" data-model="${car.modelName}">Rent Now</a>

                `;
        
                parentContainer.appendChild(childDiv);

                const rentNowButtons = document.querySelectorAll('.btn');
                rentNowButtons.forEach(button => {
                    button.addEventListener('click', handleRentNowClick);
                });
            });
            history.pushState(null, null, location.href);

            // Handle the back button
            window.addEventListener("popstate", function(event) {
                history.pushState(null, null, location.href);
            });
        } catch (error) {
            console.error('Error fetching post data:', error);
            parentContainer.innerHTML = '<p>Failed to load content.</p>';
        }
        


});

async function handleRentNowClick(event) {
    // Prevent default link behavior
    event.preventDefault();

    // Access data attributes from the clicked button
    const price = event.target.dataset.price;
    const modelName =await event.target.dataset.model;



    


    window.location.href = `rentcarform.html?model=${encodeURIComponent(modelName)}&price=${encodeURIComponent(price)}`;

    // Log the data to the console

    console.log('Per Day Price:', price);
    console.log('Car Model Name:', modelName);
}



















// document.addEventListener("DOMContentLoaded", async function() {
//     const parentContainer = document.getElementById('parent-container');
    
//     try {
//         const response = await fetch('http://localhost:3000/getPost');
//         const postCount = await response.json();

//         for (let i = 0; i < postCount; i++) { 
//             if (i % 4 === 0) {
//                 const rowDiv = document.createElement('div');
//                 rowDiv.className = 'row';
//                 parentContainer.appendChild(rowDiv);
//             }

//             try {
//                 const response = await fetch('http://localhost:3000/post');
//                 const data = await response.json();




//                 data.forEach(car => {

//                     const childDiv = document.createElement('div');
//                     childDiv.className = 'box';

//                     childDiv.innerHTML = `
//                         <div class='box-image'>
//                             <img src="${car.imageUrl}" alt="${car.modelName}">
//                         </div>
//                         <h3>${car.modelName}</h3>
//                         <h2>Rs${car.price}</h2>
//                         <a class="btn">Rent Now</a>
//                     `;

//                     const rowDiv = parentContainer.lastElementChild;
//                     rowDiv.appendChild(childDiv);
//                 });
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//                 // Handle error if needed
//             }
//         }
//     } catch (error) {
//         console.error('Error fetching post count:', error);
//         // Handle error if needed
//     }
// });






// document.addEventListener("DOMContentLoaded", async function() {
//     const parentContainer = document.getElementById('parent-container');
    
//     const response = await fetch('http://localhost:3000/getPost');

//     const postCount = await response.json();
    
//     console.log(postCount); 



//     for (let i = 0; i < postCount; i++) { 
//         if (i % 4 === 0) {
//             const rowDiv = document.createElement('div');
//             rowDiv.className = 'row';
//             parentContainer.appendChild(rowDiv);
//         }


//         try {
//             const response = await fetch('http://localhost:3000/post');
//             const data = await response.json();

            

//             data.forEach(car => {
//                 const childDiv = document.createElement('div');
//                 childDiv.className = 'box';

//                 childDiv.innerHTML = `
//                     <div class='box-image'>
//                         <img src="${car.imageUrl}" alt="${car.modelName}">
//                     </div>
//                     <h3>${car.modelName}</h3>
//                     <h2>Rs${car.price}</h2>
//                     <a class="btn">Rent Now</a>

//                 `;

                // <div class="box">
                // <div class="box-image">
                //     <img src="image/Hyundai Creta.jpg" alt="">
                // </div>
                // <h3>Hyundai Creta</h3>
                // <h2>Rs.10000 <span>/Day</span></h2>
                // <a href="#" class="btn">Rent Now</a>
                // </div>

        //         rowDiv.appendChild(childDiv);
        //     });
        // } catch (error) {
        //     console.error('Error fetching data:', error);
        //     availableCarsDiv.innerHTML = '<p>Failed to load content.</p>';
        // }

            // const image = document.createElement('div');
            // image.className = 'box-image';
            // childDiv.appendChild(image);
            
//     }
// });

