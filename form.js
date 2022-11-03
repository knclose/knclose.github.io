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
    name = document.getElementById("name").value;
    date = document.getElementById("date").value;
    zp = document.getElementById("zp").value;

    	const values = {
		name: name.value,
		date: date.value,
		zp: zp.value};
	
	alert(JSON.stringify(values));
	console.log('test')
});
