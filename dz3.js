let operations = prompt('Какую математическую операцию Вы хотите произвести? Для сложения введите: add, для вычитания введите: sub, для умножения введите: mult, для деления введите: div'),
    number1 = +prompt('Введите первое число'),//Через prompt получаем строку, с помощью унарного + получаем тип данных число
    number2 = +prompt('Введите второе число');

if (operations == 'add') {
    alert(`${number1} + ${number2} = ${number1 + number2}`);
} else if (operations == 'sub') {
    alert(`${number1} - ${number2} = ${number1 - number2}`);
} else if (operations == 'mult') {
    alert(`${number1} * ${number2} = ${number1 * number2}`);
} else if (operations == 'div') {
    alert(`${number1} / ${number2} = ${number1 / number2}`);
} else {
    alert ('Вы ввели некорректную математическую операцию, пожалуйста повторите попытку.');
}

//Вариант со switch:

/*switch(operations) {
    case 'add': 
        alert(`${number1} + ${number2} = ${number1 + number2}`);
        break;
    case 'sub': 
        alert(`${number1} - ${number2} = ${number1 - number2}`);
        break;
    case 'mult':
        alert(`${number1} * ${number2} = ${number1 * number2}`);
        break;
    case 'div':
        alert(`${number1} / ${number2} = ${number1 / number2}`);
        break;
    default:   
        alert ('Вы ввели некорректную математическую операцию, пожалуйста повторите попытку.');  
}*/