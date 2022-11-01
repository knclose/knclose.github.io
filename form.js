const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.prevenDefault();

    const name = form.querySelector('[name="name"]'),
        date = form.querySelector('[name="date"]');

    const values = {
        name: name.value,
        date: date.value
    };

    console.log(values)
}

form.addEventListener('submit', retrieveFormValue);