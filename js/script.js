let a = prompt ('Введите первое число');
let operator = prompt ('Введите действие');
let b = prompt ('Введите второе число');
let result;
Number.isNaN(a,b) != true;
if (operator == '+') {
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