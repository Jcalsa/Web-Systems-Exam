const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // This mock login does not verify real account credentials.
    window.location.href = "youtube.html";
});
