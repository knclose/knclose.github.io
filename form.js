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
    fio = document.getElementById("name").value;
    date = document.getElementById("date").value;
    cash = document.getElementById("cash").value;
    term = document.getElementById("term").value;
    qr = document.getElementById("qr").value;
    amount = document.getElementById("amount").value;
    stcash = document.getElementById("stcash").value;
    fncash = document.getElementById("fncash").value;
    incas = document.getElementById("incas").value;
    rash = document.getElementById("rash").value;
    zp = document.getElementById("zp").value;

    values = {name: fio,
	      date: date,
          cash: cash,
          term: term,
          qr: qr,
          amount: amount,
          stcash: stcash,
          fncash: fncash,
          incas: incas,
          rash: rash,
	      zp: zp};
	
    alert(JSON.stringify(values));
    tg.sendData(JSON.stringify(values));
});


