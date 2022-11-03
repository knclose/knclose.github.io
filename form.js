let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#2cab37";

tg.MainButton.text = "Отправить 00!"
tg.MainButton.isVisible = true
tg.MainButton.isActive = true
tg.MainButton.show()
tg.MainButton.enable()


Telegram.WebApp.onEvent("mainButtonClicked", function(){
	const name = document.getElementById('name').value,
		date = document.getElementById('date').value,
		cash = document.getElementById('cash').value,
		term = document.getElementById('term').value,
		qr = document.getElementById('qr').value,
		amount = document.getElementById('amount').value,
		stcash = document.getElementById('stcash').value,
		fncash = document.getElementById('fncash').value,
		incas = document.getElementById('incas').value,
		rash = document.getElementById('rash').value,
		zp = document.getElementById('zp').value;

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
		zp: zp.value};
	
	alert(JSON.stringify(values));
	console.log('test')
});
