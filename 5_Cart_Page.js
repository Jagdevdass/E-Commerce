function searchGoogle() {
    let query = document.getElementById("searchBox").value;
    if (query.trim() !== "") {
        let googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(googleSearchURL, "_blank");
    } else {
        alert("Please enter a search term.");
    }
}

// Event listener for the search icon click
document.getElementById("searchIcon").addEventListener("click", searchGoogle);

// Event listener for the Enter key
document.getElementById("searchBox").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchGoogle();
    }
});
