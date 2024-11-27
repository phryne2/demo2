document.getElementById('login-button').addEventListener('click', function(e) {
    e.preventDefault(); // Prevent form submission

    const username = document.loginForm.username.value;
    const password = document.loginForm.password.value;
    const loginErrorMsg = document.getElementById('login-error-msg');

    if (username === "user" && password === "web_dev") {
        alert("Logged in successfully!");
        location.reload(); // Reload the page
    } else {
        loginErrorMsg.style.opacity = 1; // Show error message
    }
});
