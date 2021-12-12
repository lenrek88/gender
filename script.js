const UI = {
    INPUT: document.querySelector('input[type=text]'),
    BUTTON:  document.querySelector('input[type=button]'),
    TEXT:  document.querySelectorAll('p')
}

const URL = {
    GENDER: 'https://api.genderize.io',
    NATIONAL: 'https://api.nationalize.io'
}

function alertGender(){
    const firstName = UI.INPUT.value;
    const url = `${URL.GENDER}?name=${firstName}`;
    fetch(url)
        .then(response => response.json())
        .then(units => {
            if (units.gender === 'male' || units.gender === 'female') {
                UI.TEXT[0].textContent = `${UI.INPUT.value} is ${units.gender}`;
            } else
                 {
                     UI.TEXT[0].textContent = `Error :(`
                 }
        });
    alertCountry(firstName);
}

function alertCountry(firstName) {
    const url = `${URL.NATIONAL}?name=${firstName}`;
    fetch(url)
        .then(response => response.json())
        .then(units => {
            UI.TEXT[1].textContent = `Your country ${units.country[0].country_id} or ${units.country[1].country_id}`
        })
}


UI.BUTTON.addEventListener('click', alertGender);