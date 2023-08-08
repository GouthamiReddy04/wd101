// Move this part outside the submit event listener
const savedUserData = localStorage.getItem('userData');
if (savedUserData) {
    const userDataArray = JSON.parse(savedUserData);
    userDataArray.forEach(userData => {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${userData.name}</td>
            <td>${userData.email}</td>
            <td>${userData.password}</td>
            <td>${userData.dob}</td>
            <td>${userData.acceptedTerms ? 'true' : 'false'}</td>
        `;
        tableBody.appendChild(newRow);
    });
}

// Inside the submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;

    // Add validation for email address (use pattern or regex)

    // Validate age between 18 and 55

    // Add the data to the table

    // Save data to localStorage

    // Clear form fields
    form.reset();
});
