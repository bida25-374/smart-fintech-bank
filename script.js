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
        return false; // prevent page refresh
    }


    // SAVINGS FORM
    function submitSavings() {
        alert("Your savings have been submitted successfully!");
    }

    // LOAN FORM
    function submitLoan() {
        alert("loan application submitted successfully!");
    }

// CONTACT FORM MESSAGE
    function submitForm() {
        const name = document.querySelector('input[name="name"]').value;
        const email = document.querySelector('input[name="email"]').value;
        const phone = document.querySelector('input[name="phone"]').value;
        const message = document.querySelector('input[name="message"]').value;

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields");
            return false;
        }

        alert("Your message has been submitted successfully!");
        return false; // prevent page refresh   
    }