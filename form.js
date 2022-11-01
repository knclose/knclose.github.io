const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.prevenDefault();

    const name = form.querySelector('[name="name"]'),
        date = form.querySelector('[name="date"]'),
        cash = form.querySelector('[name="cash"]'),
        term = form.querySelector('[name="term"]'),
        qr = form.querySelector('[name="qr"]'),
        amount = form.querySelector('[name="amount"]'),
        stcash = form.querySelector('[name="stcash"]'),
        fncash = form.querySelector('[name="fncash"]'),
        incas = form.querySelector('[name="incas"]'),
        rash = form.querySelector('[name="rash"]'),
        zp = form.querySelector('[name="zp"]');

    const values = {
        name: name.value,
        date: date.value,
        cash: cash.value,
        term: term.value,
        qr: qr.value,
        amount: amount.value,
        stcash: stcash.value,
        fncash: fncash.value,
        incas: incas.value,
        rash: rash.value,
        zp: zp.value
    };

    console.log(values)
}

form.addEventListener('submit', retrieveFormValue);

