const form = document.getElementById('registrationForm');
const goutableBody = document.getElementById('userTableBody');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const acceptedTerms = document.getElementById('acceptedTerms').checked;
    
    const today = new Date();
    const dobDate = new Date(dob);
    const age = today.getFullYear() - dobDate.getFullYear();
    if (age < 18 || age > 55) {
        alert("Date of Birth must be between 18 and 55 years old.");
        return;
    }
    
    const NewRow = document.createElement('tr');
    NewRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${password}</td>
        <td>${dob}</td>
        <td>${acceptedTerms ? 'Yes' : 'No'}</td>
    `;
    tableBody.appendChild(NewRow);
    
    const userData = {
        name: name,
        email: email,
        password: password,
        dob: dob,
        acceptedTerms: acceptedTerms
    };
    
    let storedData = localStorage.getItem('userData');
    if (!storedData) {
        storedData = [];
    } else {
        storedData = JSON.parse(storedData);
    }
    
    storedData.push(userData);
    localStorage.setItem('userData', JSON.stringify(storedData));
    
    form.reset();
});

const savedUserData = localStorage.getItem('userData');
if (savedUserData) {
    const userDataArray = JSON.parse(savedUserData);
    userDataArray.forEach(userData => {
        const NewRow = document.createElement('tr');
        NewRow.innerHTML = `
            <td>${userData.name}</td>
            <td>${userData.email}</td>
            <td>${userData.password}</td>
            <td>${userData.dob}</td>
            <td>${userData.acceptedTerms ? 'Yes' : 'No'}</td>
        `;
        tableBody.appendChild(NewRow);
    });
}
