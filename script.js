console.log("JavaScript is connected!");

function goToSection(SectionId) {
    document.getElementById(SectionId).scrollIntoView({ behavior: "smooth" });
}

// LOGIN VALIDATION
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in all fields");
        return false;
        
    } 

        alert("Login successful!");
        return true;
    }
