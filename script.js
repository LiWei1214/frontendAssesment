document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registration-form');
    const submitButton = document.getElementById('check-button');

    form.addEventListener('submit', (event) => {
        // Check if form is valid before handling submission
        if (!form.checkValidity()) {
            event.preventDefault(); // Prevent default form submission
            form.reportValidity(); // Show browser's validation messages
        } else {
            // Collect form data
            const name = form.querySelector('#name').value;
            const day = form.querySelector('#day').value;
            const month = form.querySelector('#month').value;
            const year = form.querySelector('#year').value;
            const email = form.querySelector('#email').value;
            const noEmail = form.querySelector('#no_email').checked;

            // Validate email format if provided
            let errors = [];
            if (email && !validateEmail(email)) {
                errors.push('Invalid email address.');
            }

            if (errors.length > 0) {
                alert(errors.join('\n'));
            } else {
                // Form is valid, handle submission
                alert(`Name: ${name}\nDate of Birth: ${day}/${month}/${year}\nEmail: ${email}\nNo email: ${noEmail}`);
                // Optionally, submit the form data using AJAX or other methods
            }
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});