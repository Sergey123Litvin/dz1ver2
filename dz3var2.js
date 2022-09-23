let add = confirm('Хотите произвести операцию сложения?'),
    sub = confirm('Хотите произвести операцию вычитания?'),
    mult = confirm('Хотите произвести операцию умножения?'),
    div = confirm('Хотите произвести операцию деления?'),
    number1 = +prompt ('Введите первое число'),
    number2 = +prompt ('Введите второе число');

if (add) {
    alert(`${number1} + ${number2} = ${number1 + number2}`);
}
if (sub) {
    alert(`${number1} - ${number2} = ${number1 - number2}`);
}
if (mult) {
    alert(`${number1} * ${number2} = ${number1 * number2}`);
}
if (div) {
    alert(`${number1} / ${number2} = ${number1 / number2}`);
}

