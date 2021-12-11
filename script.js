const UI = {
    INPUT: document.querySelector('input[type=text]'),
    BUTTON:  document.querySelector('input[type=button]'),
    TEXT:  document.querySelector('p')
}

const SERVER_URL = 'https://api.genderize.io';

function alertGender(){
    const firstName = UI.INPUT.value;
    const url = `${SERVER_URL}?name=${firstName}`;
    fetch(url)
        .then(response => response.json())
        .then(units => {
            if (units.gender === 'male' || units.gender === 'female') {
                UI.TEXT.textContent = `${UI.INPUT.value} is ${units.gender}`;
            } else
                 {
                     UI.TEXT.textContent = `Error :(`
                 }
        });
}


UI.BUTTON.addEventListener('click', alertGender);