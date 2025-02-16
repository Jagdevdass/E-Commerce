function resetPassword() {
    let email = document.getElementById("emailInput").value;
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }
    alert("A reset link has been sent to your email.");
}