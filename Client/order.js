document.getElementById('add-booking').addEventListener('click', function() {
    const bookingList = document.getElementById('booking-list');

    // Create a new booking entry div
    const newBooking = document.createElement('div');
    newBooking.className = 'booking-entry';

    // Add the HTML content for the new booking entry
    newBooking.innerHTML = `       
     <div>pickup date: <span>${getRandomDate()}</span></div>
    <div>return date: <span>${getRandomDate()}</span></div>
    <div>phone: <span>${getRandomPhone()}</span></div>
    <div>address: <span>${getRandomAddress()}</span></div>`

    ;

    // Append the new booking entry to the booking list
    bookingList.appendChild(newBooking);
});

function getRandomDate() {
    const start = new Date();
    const end = new Date(start.getFullYear(), start.getMonth() + 2, start.getDate());
    const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return date.toISOString().split('T')[0];
}

function getRandomPhone() {
    return 1;
}

function getRandomAddress() {
    const addresses = [
        '123 Hetauda',
        '456 Lokanthali',
        '789 Ghattaghar',
        '101 Bhaktapur'
    ];
    return addresses[Math.floor(Math.random() * addresses.length)];
}