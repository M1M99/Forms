//Form
function containsNumber(text) { // number contains in text
    for (let i = 0; i < text.length; i++) {
        if (!isNaN(text[i]) && text[i] !== ' ') {
            return true;
        }
    }
    return false;
}

let forms = document.getElementById('myForm');
const name = document.getElementById('name');
const email = document.getElementById('email');
const passW = document.getElementById('passW');

name.addEventListener('input', () => {
    const existingMessage = name.parentNode.querySelector('p');
    if (existingMessage) {
        existingMessage.remove();
    }
    if (
        name.value.length <= 8 ||
        name.value.trim()[0] !== name.value.trim()[0].toLowerCase() ||
        containsNumber(name.value)
    ) {
        name.classList.add('input-error');
        name.classList.remove('input-success');

        let tag = document.createElement('p');
        tag.innerHTML = `Username must be least 8 characters long, start with a lowercase letter, and contain not numbers.`;
        name.parentNode.appendChild(tag);
        tag.classList.add('error-message');
    } else {
        name.classList.add('input-success');
        name.classList.remove('input-error');

        let tag = document.createElement('p');
        tag.innerHTML = `Username is valid!`;
        name.parentNode.appendChild(tag);
        tag.classList.add('success-message');
        tag.classList.remove('error-message');
    }
});



email.addEventListener('input', () => {
    const emailValue = email.value.trim();

    const existingMessage = email.parentNode.querySelector('p');
    if (existingMessage) {
        existingMessage.remove();
    }

    if (emailValue[0] === emailValue[0].toUpperCase()) {
        let tag = document.createElement('p');
        tag.innerHTML = `Email must start with a lowercase letter.`;
        email.parentNode.appendChild(tag);
        tag.classList.add('error-message');
        email.classList.add('input-error');
        email.classList.remove('input-success');
    }
    else if (emailValue.indexOf('@') === -1 || emailValue.indexOf('.') === -1) {
        let tag = document.createElement('p');
        tag.innerHTML = `Please Enter Valid email address.`;
        email.parentNode.appendChild(tag);
        tag.classList.add('error-message');
        email.classList.add('input-error');
        email.classList.remove('input-success');
    }
    else {
        let tag = document.createElement('p');
        tag.innerHTML = `Email is valid!`;
        email.parentNode.appendChild(tag);
        tag.classList.add('success-message');
        email.classList.add('input-success');
        email.classList.remove('input-error');
    }
});


passW.addEventListener('input', () => {
    const existingMessage = passW.parentNode.querySelector('p');
    if (existingMessage) {
        existingMessage.remove();
    }

    if (passW.value.length <= 8 ||
        passW.value.trim()[0] !== passW.value.trim()[0].toUpperCase() ||
        !containsNumber(passW.value)) {

        let tag = document.createElement('p');
        tag.innerHTML = `Password must be least 8 characters long, start with an uppercase letter, and contain a number.`;
        passW.parentNode.appendChild(tag);
        tag.classList.add('error-message');
        passW.classList.add('input-error');
        passW.classList.remove('input-success');
    } else {
        let tag = document.createElement('p');
        tag.innerHTML = `Password is valid!`;
        passW.parentNode.appendChild(tag);
        tag.classList.add('success-message');
        tag.classList.remove('error-message');
        passW.classList.add('input-success');
        passW.classList.remove('input-error');
    }
});


forms.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (
        name.classList.contains('input-error') ||
        email.classList.contains('input-error') ||
        passW.classList.contains('input-error')
    ) {
        alert("Enter Correct Form Element");
    } else {
        if (name.value.trim() !== '' && passW.value.trim() !== '' && email.value.trim() !== '') {
            alert("Form Sent");
            console.log("Name:", name.value);
            console.log("Password:", passW.value);
            console.log("Email:", email.value);
        } else {
            alert("Please fill out Fields!");
        }
    }
});
