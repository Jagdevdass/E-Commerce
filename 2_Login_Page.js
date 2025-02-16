function validateLogin() {
    let email = document.getElementById("mail").value;
    let password = document.getElementById("pswrd").value;

    if (email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert("You have done..");

    // Redirect to home page after alert
    window.location.href = "http://127.0.0.1:5000/";

}

// Toggle Password Visibility
document.getElementById("togglePassword").addEventListener("click", function () {
    let passwordField = document.getElementById("pswrd");
    if (passwordField.type === "password") {
        passwordField.type = "text";
        this.classList.replace("fa-eye", "fa-eye-slash");
    } 
    else {
        passwordField.type = "password";
        this.classList.replace("fa-eye-slash", "fa-eye");
    }
});

// Autocomplete off

window.onload = function() {
    let passwordField = document.getElementById("pswrd");
    passwordField.value = ""; // Clear any autofilled value
    passwordField.setAttribute("placeholder", "Enter 6 character or more"); // Reapply placeholder
    passwordField.setAttribute("autocomplete", "new-password");
};


