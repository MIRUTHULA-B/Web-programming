document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents the default form submission action

    // Get input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber = document.getElementById('phoneNumber').value;

    // Basic validation (you should enhance this with more robust checks)
    if (firstName && lastName && email && password && phoneNumber) {
        // Here you would typically send data to a server for processing
        // For demonstration, we'll just display the data
        const resultDiv = document.getElementById('result');
        resultDiv.innerText = `Form submitted successfully! Your details: 
            First Name: ${firstName}, 
            Last Name: ${lastName}, 
            Email: ${email}, 
            Password: ${password}, 
            Phone Number: ${phoneNumber}`;
        
        // Clear form fields
        this.reset();
    } else {
        alert('Please fill all fields.');
    }
});
