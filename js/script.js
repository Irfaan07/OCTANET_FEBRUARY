document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript Loaded!");

    // Handle Sign In button click
    document.querySelector(".signin").addEventListener("click", function () {
        alert("Sign In Clicked!");
    });

    // Handle Sign Up button click
    document.querySelector(".signup").addEventListener("click", function () {
        alert("Sign Up Clicked!");
    });

    // Handle Search Flights button click
    document.querySelector(".search-btn").addEventListener("click", function () {
        alert("Searching for flights...");
    });
});
