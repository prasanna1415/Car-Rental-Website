

document.getElementById("registrationForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    try {
        const response = await fetch("http://127.0.0.1:3000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password })
        });
        
        const data = await response.json();
        alert(data.message);

        const check = data.message;

        if(check === 'Registration successful'){
            //redirecting
            window.location.href = "signin.html";
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
