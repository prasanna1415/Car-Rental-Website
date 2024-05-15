const sr= ScrollReveal(
    {
        distance : '60px',
        duration : 2500,
        delay: 400,
        reset:true,

    }
)

sr.reveal('.text',{delay:200,origin:'top'})
sr.reveal('.form-container form',{delay:800,origin:'left'})
sr.reveal('.heading',{delay:600,origin:'top'})
sr.reveal('.ride-container .box',{delay:400,origin:'top'})
sr.reveal('.services-container .box',{delay:400,origin:'top'})
sr.reveal('.about-container .box',{delay:400,origin:'top'})
sr.reveal('.reviews-container',{delay:400,origin:'top'})
sr.reveal('.newsletter .box',{delay:400,origin:'bottom'})

// Open Sign-up Popup
function openSignupPopup() {
    document.getElementById('signup-popup').style.display = 'flex';
}

// Open Sign-in Popup
function openSigninPopup() {
    document.getElementById('signin-popup').style.display = 'flex';
}
     

// // Close Popup
// function closePopup(popupId) {
//     document.getElementById(popupId).style.display = 'none';
// }

// Close popup when clicking outside
document.addEventListener('click', function(event) {
    var popups = document.querySelectorAll('.popup-container');
    for (var i = 0; i < popups.length; i++) {
        var popup = popups[i];
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }
});

