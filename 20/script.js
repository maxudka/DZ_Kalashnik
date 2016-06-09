/**
 * Created by maxud on 08.06.2016.
 */

/* 1 */
var month = prompt("Какой сейчас месяц?");
if (month == "сентябрь")
{ alert ("Вы правы!")}
else { alert ("Та ну ты что? сентябрь!")}

/* 2 */
var num = +prompt('Введите любое целое число?');
console.info (num);
if (num > 0)
{alert(1)}
else if (num < 0)
{alert(-1)}
else {alert(0)}

/* 3 */
x + y >= 9 ? alert ('Да!') : alert ('Нет!');

/* 4 */
var i = 0;
while ( ++i > 0 && Num <= 100) { Num = +prompt('Введите число')}
/* не понял, зачем тут функция?) */

/* 5 */
var a = +prompt('a?', '');
switch (a) {
    case 0: alert (0);
            break;
    case 1: alert (1);
            break;
    case 2:
    case 3: alert ('2,3');
            break;
}

/* 6 */
function pow(a, b) {
    if (b > 1) {
        return a * pow(a, b - 1);
        }
    else {return a;}
}

