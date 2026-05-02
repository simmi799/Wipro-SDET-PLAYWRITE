const login = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

     if (username === "" || password === "") {
        alert("Please fill all fields!");
        return;
    }
    
    if (username === "simmi" && password === "simmi799") {
        alert("Login successful!");
        window.location.href = "app.html";
    } else {
        alert("Invalid username or password.");
    }
}