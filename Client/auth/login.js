


    document.getElementById("loginform").addEventListener("submit", async function(event) {
        event.preventDefault();
        
        const username = document.getElementById("usernameid").value;
        const password = document.getElementById("passwordid").value;
        
        try {
            if(username === 'admin' && password === 'admin'){

                window.location.href = "Admin.html";
        
            }else{

                const response = await fetch("http://127.0.0.1:3000/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ username, password })
                });
                
                const data = await response.json();
                alert(data.message);
        
                if (data.message === `Welcome ${username}`) {
                    // Redirecting
                    window.location.href = "index.html";
                }
            }


            } catch (error) {
                console.error("Error:", error);
            }


    });
    





    // document.getElementById("loginform").addEventListener("submit", async function(event) {
    //     event.preventDefault();
        
    //     const username = document.getElementsByClassName("username").value;
    //     const password = document.getElementsByClassName("password").value;
        
    //     try {
    //         const response = await fetch("http://127.0.0.1:3000/login", {
    //             method: "POST",
    //             headers: {
    //                 "Content-Type": "application/json"
    //             },
    //             body: JSON.stringify({ username, password })
    //         });
            
    //         const data = await response.json();
    //         alert(data.message);
    
    //         const check = data.message;
    
    //         if(check === ''){
    //             //redirecting
    //             window.location.href = "index.html";
    //         }
    //     } catch (error) {
    //         console.error("Error:", error);
    //     }
    // });