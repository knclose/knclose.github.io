let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

tg.MainButton.text = "Отправить отчет"
tg.MainButton.isVisible = true
tg.MainButton.isActive = true
tg.MainButton.show()
tg.MainButton.nable()

const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

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
    window.location.href = 'tnanks.html';
    // tg.sendData(values)
}



form.addEventListener('submit', retrieveFormValue);


item = "6";
Telegram.WebApp.onEvent("mainButtonClicked", function(){
	tg.sendData(item);
});
