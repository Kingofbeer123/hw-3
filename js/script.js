let a = prompt ('Введите первое число');
let operator = prompt ('Введите действие');
let b = prompt ('Введите второе число');
let result;
if (isNaN(a,b)) {
    alert( `Введите корректные числа`);
}
else if (operator == '+') {
    alert( `Ваш ответ ${result = (a+b)}!`);
}
else if (operator == '-') { 
    alert( `Ваш ответ ${result = (a-b)}!`);
}
else if (operator == '*') { 
    alert( `Ваш ответ ${result = (a*b)}!`);
}
else if (operator == '/') { 
    alert( `Ваш ответ ${result = (a/b)}!`);
}
else {
    alert( `Такой операции не существует`);
}