const age = confirm("Есть ли вам 18 лет?");

if(age === true) {
    const time = Number(prompt("Во сколько вы встаете?"));
    if (isNaN(time)) {
        alert("Некорректный ввод");
    }else if ( time <=0 || time > 24) {
        alert("Научись пользоваться часами!");
    }else if (time >= 1 && time <= 5) {
        alert("Очень рано");
    } else if (time >= 6 && time <= 8) {
        alert("Всё равно рано");
    } else if (time >= 9 && time <= 11) {
        alert("Нормально");
    } else if (time >= 12 && time <= 14) {
        alert("Слишком поздно");
    } else if (time > 14 && time <=24 ) {
        alert("Очень-очень поздно");
    }
}
else{
    alert("Вам запрещено проходить опрос");
}
