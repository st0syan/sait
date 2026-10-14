let check = false;

function verify() {
    let a = parseFloat(document.getElementById("a").value);
    let h = parseFloat(document.getElementById("h").value);
    let r = parseFloat(document.getElementById("r").value);
    let m = parseFloat(document.getElementById("m").value);
    let result;

    if (!(a > 0 && h > 0 && r > 0 && m > 0)) {
        result = "Ошибка: все числа должны быть больше нуля";
        check = false;
    } else {
        let v1 = a * a * a;              // объём куба
        let v2 = Math.PI * r * r * h;    // объём цилиндра
        result = "Объём куба = " + v1.toFixed(2) + ", объём цилиндра = " + v2.toFixed(2) + ". ";
        result += "Куб: " + (m >= v1 ? "можно заполнить" : "нельзя заполнить") + ". ";
        result += "Цилиндр: " + (m >= v2 ? "можно заполнить" : "нельзя заполнить") + ". ";
        result += "Обе ёмкости: " + (m >= v1 + v2 ? "можно заполнить" : "нельзя заполнить") + ".";
        check = true;
    }
    document.getElementById("result").value = result;
}

function send() {
    if (check) {
        document.getElementById("UserEnter").submit();
    } else {
        alert("Сначала решите задачу с корректными данными");
    }
}

document.getElementById("verify").addEventListener("click", verify);
document.getElementById("send").addEventListener("click", send);
