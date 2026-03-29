const form = document.getElementById("registratioForm");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// message sapan

const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmpasswordError = document.getElementById("confirmPasswordError");


window.addEventListener("load ", () => {
    const savedUsername = localStorage.getItem("username ");
    if (savedUsername) {
        username.value = savedUsername;
    }

});

// Checking to see username is not empty

username.addEventListener("input", () => {
    // console.log('Input value:', username.value);
    // console.log('Is valid:', username.validity.valid);
    // console.log('Value missing:', username.validity.valueMissing);

    if (username.validity.valueMissing || username.value.trim() === "") {
        usernameError.textContent = "Username is requierd";
        console.log("Error set: Username is required");
    } else {
        usernameError.textContent = "";
        console.log("No error");
    }
});

email.addEventListener("input", () => {
    if (email.validity.valueMissing) {
        emailError.textContent = "Email is requierd";
    } else if (email.validity.Mismatch) {
        emailError.textContent = "please eneter a valid email";
    } else {
        emailError.textContent = "";
    }
});

// confriming the pass words to make sure match
confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value == "") {
        confirmPasswordError.textContent = "Confirm your password again";
    } else if (confirmPassword.value !== password.value) {
        confirmpasswordError.textContent =
            "Passwords do not match  please try again";
    } else confirmpasswordError.textContent = "";
});


// Form Submission 

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let firstInvalidField = null

    if (username.value.trim()=== ""){
        usernameError.textContent = "Username is required"
        firstInvalidField = firstInvalidField || username
    }
    else if (username.validity.tooShort){
        usernameError.textContent = "User name is to short"
        firstInvalidField = firstInvalidField || username
    }

    if (email.validity.valueMissing){
        emailError.textContent ="email; is required."
    } else if (email.validity.typeMismatch){
        emailError.textContent = "please eneter a valid email"
        firstInvalidField =firstInvalidField || email

    }








})