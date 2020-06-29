menu.onclick = function myFunction () {				// при клики на menu запускается функция myFunction
	var x = document.getElementById('myTopnav');	// вызов переменной х и пирисваивание ей элемент с ID myTopnav

	if (x.className === "topnav") {					// если оператор х содержит только класс topnav
		x.className += " responsive";				// тогда добавляем класс responsive
	} else {										// иначе
		x.className = "topnav";						// он таким и останется
	}
};