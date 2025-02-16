document.getElementById("signupBtn").addEventListener("click", function () {
    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let password = document.getElementById("pswrd").value;

    if (name === "" || email === "" || password === "") {
        alert("Please fill out all fields.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    alert("Account created successfully!");

    window.location.href = "http://127.0.0.1:5000/";
});

window.onload = function() {
    let passwordField = document.getElementById("pswrd");
    passwordField.value = ""; // Clear any autofilled value
    passwordField.setAttribute("placeholder", "Enter password.."); // Reapply placeholder

    // Additional fix to prevent autofill
    passwordField.setAttribute("autocomplete", "new-password");
};
