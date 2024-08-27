// Defining a function to display an error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate the form
const loginBtn = () => {
    // Retrieving the value of the form elements
    let email = document.contactForm.email.value;
    let mobile = document.contactForm.mobile.value;
    let password = document.contactForm.password.value;

    // Defining error variables with a default value
    let emailErr = true;
    let mobileErr = true;
    let passwordErr = true;

    // Validating email address
    if (email === '') {
        printError('emailErr', 'Please enter your email address');
    } else {
        // Regular expression for basic email validation
        const regex = /^\S+@\S+\.\S+$/;
        if (regex.test(email) === false) {
            printError('emailErr', 'Please enter a valid email');
        } else {
            printError('emailErr', '');
            emailErr = false;
        }
    }

    // Validating mobile number
    if (mobile === '') {
        printError('mobileErr', 'Please enter your mobile number');
    } else {
        // Regular expression for a 10-digit mobile number with optional spaces or dashes
        const regex = /^[0-9\s\-]{10}$/;
        if (regex.test(mobile) === false) {
            printError('mobileErr', 'Please enter a valid 10-digit mobile number');
        } else {
            printError('mobileErr', '');
            mobileErr = false;
        }
    }

    // Validating password
    if (password === '') {
        printError('passwordErr', 'Please enter your password');
    } else {
        // Regular expression for password with at least one uppercase letter, one lowercase letter, one digit, and one special character
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (regex.test(password) === false) {
            printError('passwordErr', 'Your password should have at least one uppercase letter, one lowercase letter, one digit, and one special character');
        } else {
            printError('passwordErr', '');
            passwordErr = false;
        }
    }

    // Prevent the form from being submitted if there are any errors
    if (emailErr || mobileErr || passwordErr) {
        return false;
    } else {
        // Create a string from input data for preview
        const dataPreview = "You've entered the following details:\n" +
            "Email Address: " + email + "\n" +
            "Mobile Number: " + mobile + "\n" +
            "Password: " + password;

        window.alert(dataPreview);
    }
}