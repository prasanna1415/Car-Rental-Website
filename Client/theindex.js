history.pushState(null, null, location.href);

// Handle the back button
window.addEventListener("popstate", function(event) {
    history.pushState(null, null, location.href);
});