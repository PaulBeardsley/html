const nameInput = document.querySelector('[name="name"]');


const formSubmit = event => {
    event.preventDefault();
    alert(`The form was submitted.`);
    for(let i = 0; i < 3;i++) {
        console.log(event.target[i].value);
    }
    
}

document.querySelector('form').addEventListener('submit', formSubmit);

//Extension
const validateNameLength = event => {
    if(event.target.value.length < 2) {
        alert("Name not long enough");
        nameInput.focus();
    }
}

nameInput.addEventListener('change', validateNameLength);

