document.addEventListener('DOMContentLoaded',async ()=> {



    const bookingList = document.getElementById('booking-list');

    


        try{
            const list = await fetch('http://localhost:3000/book');
            const bookings = await list.json();

            bookings.forEach(booking => {
                const newBooking = document.createElement('div');
                newBooking.className = 'booking-entry';

                newBooking.innerHTML = `       
                <div>pickup date: <span>${ booking.pickupDate}</span></div>
                <div>return date: <span>${ booking.returnDate}</span></div>
                <div>phone: <span>${ booking.phone}</span></div>
                <div>address: <span>${ booking.location }</span></div>
                <div>modelName: <span>${ booking.modelName }</span></div>`;

            bookingList.appendChild(newBooking);
            });



        }catch(e){
            console.error('Error fetching post data:', e);
        }

    
    }

);
