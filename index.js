const form = document.getElementById('gouregistrationForm');
const goutableBody = document.getElementById('userTableBody');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const gouname = document.getElementById('gouname').value;
    const gouemail = document.getElementById('gouemail').value;
    const goupassword = document.getElementById('goupassword').value;
    const goudob = document.getElementById('goudob').value;
    const gouacceptedTerms = document.getElementById('gouacceptedTerms').checked;
    
    const goutoday = new Date();
    const goudobDate = new Date(goudob);
    const gouage = goutoday.getFullYear() - goudobDate.getFullYear();
    if (gouage <= 18 || gouage >= 55) {
        alert("Date of Birth must be between 18 and 55 years old.");
        return;
    }
    
    const gouNewRow = document.createElement('tr');
    gouNewRow.innerHTML = `
        <td>${gouname}</td>
        <td>${gouemail}</td>
        <td>${goupassword}</td>
        <td>${goudob}</td>
        <td>${gouacceptedTerms ? 'Yes' : 'No'}</td>
    `;
    goutableBody.appendChild(gouNewRow);
    
    const gouuserData = {
        gouname: gouname,
        gouemail: gouemail,
        goupassword: goupassword,
        goudob: goudob,
        gouacceptedTerms: gouacceptedTerms
    };
    
    let storedData = localStorage.getItem('gouuserData');
    if (!storedData) {
        storedData = [];
    } else {
        storedData = JSON.parse(storedData);
    }
    
    storedData.push(gouuserData);
    localStorage.setItem('gouuserData', JSON.stringify(storedData));
    
    form.reset();
});

const gousavedUserData = localStorage.getItem('gouuserData');
if (gousavedUserData) {
    const gouuserDataArray = JSON.parse(gousavedUserData);
    gouuserDataArray.forEach(gouuserData => {
        const gouNewRow = document.createElement('tr');
        gouNewRow.innerHTML = `
            <td>${gouuserData.gouname}</td>
            <td>${gouuserData.gouemail}</td>
            <td>${gouuserData.goupassword}</td>
            <td>${gouuserData.goudob}</td>
            <td>${gouuserData.gouacceptedTerms ? 'Yes' : 'No'}</td>
        `;
        goutableBody.appendChild(gouNewRow);
    });
}
