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

    values = {name: name,
	      date: date,
	      zp: zp};
	
	alert(JSON.stringify(values));
	console.log('test')
});
