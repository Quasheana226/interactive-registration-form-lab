const form = document.getElementById("registratioForm")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")


// message sapan


con

// span error
const usernameError = document.getElementById

window.addEventListener('load ', () => {
    const savedUsername = localStorage.getItem("username ")
    if (savedUsername) {
        username.value = savedUsername
    }



});


// Checking to see username is not empty 

username.addEventListener('input', () => {
    if (username.validity.valueMissing || username.value.trim() === "") {
        usernameError.textContent = "Username is requierd"

    } else {
        usernameError.textContent = ""

    }




});