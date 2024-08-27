document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.signup-form').addEventListener('submit', function (event) {
        // Prevent form submission
        event.preventDefault();

        // Clear previous errors
        clearErrors();

        // Get form values
        const fullName = document.querySelector('input[placeholder="Full Name"]').value.trim();
        const email = document.querySelector('input[placeholder="johndoe@gmail.com"]').value.trim();
        const password = document.querySelector('input[placeholder="Password"]').value.trim();
        const confirmPassword = document.querySelector('input[placeholder="Confirm Password"]').value.trim();

        // Validate fields
        let isValid = true;

        if (!fullName) {
            showError('nameErr', 'Full Name is required.');
            isValid = false;
        }

        if (!email || !validateEmail(email)) {
            showError('emailErr', 'A valid email address is required.');
            isValid = false;
        }

        if (!password) {
            showError('passwordErr', 'Password is required.');
            isValid = false;
        }

        if (password !== confirmPassword) {
            showError('passwordErr2', 'Passwords do not match.');
            isValid = false;
        }

        // If form is valid, proceed with form submission (e.g., AJAX call)
        if (isValid) {
            // Perform form submission or AJAX request here
            alert('Form is valid and ready for submission!');
            // Example: this.submit();  // Uncomment this to allow form submission
        }
    });

    function showError(id, message) {
        const errorElement = document.getElementById(id);
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.add('text-danger');
        }
    }

    function clearErrors() {
        const errorElements = document.querySelectorAll('.error');
        errorElements.forEach(el => {
            el.textContent = '';
            el.classList.remove('text-danger');
        });
    }

    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
