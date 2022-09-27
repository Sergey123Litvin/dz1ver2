//ДЗ 6. switch…case
//Переписать код ниже с использованием конструкции switch…case

    /*if(numOrStr === null) {
    console.log('вы отменили')
    } else if( numOrStr.trim() === '' ) {
    console.log('Empty String');
    } else if( isNaN( +numOrStr ) ) {
    console.log(' number is Ba_NaN')
    } else {
    console.log('OK!')
    }*/

    // let numOrStr = prompt('input number or string');
    // console.log(numOrStr);

    // switch (true) {
    //     case numOrStr === null: 
    //         console.log('вы отменили');
    //         break;
    //     case numOrStr.trim() === '' :
    //         console.log('Empty String');
    //         break;   
    //     case isNaN(+numOrStr): 
    //         console.log(' number is Ba_NaN'); 
    //         break;
    //     default:
    //         console.log('OK!');
    // }

//ДЗ 7. Написание циклов
    //Вывести на страницу в одну строку через запятую числа от 10 до 20

        // function num (a, b) {
        //     let result = '';
        //     for (let i = a; i <= b; i++) {
        //         result = result + `, ${i}`;
        //     }
        //     alert(result.substring(1));
        // }

        // num(10, 20);

    //Вывести квадраты чисел от 10 до 20

        // function square (a, b) {
        //     for (let i = a; i <= b; i++) {
        //         console.log(`${Math.pow(i, 2)}`);
        //     }
        // }

        // square(10, 20);

    //Вывести таблицу умножения на 7

        // function table (a) {
        //     for (let i = 1; i <=10; i++) {
        //             console.log(`${a} * ${i} = ${a * i}`);
        //         }
        // }

        // table(7);

    //Найти сумму всех целых чисел от 1 до 15

        // function sum (a, b) {
        //     let sumNumbers = 0;
        //     for (let i = a; i <= b; i++) {
        //         sumNumbers = sumNumbers + i;
        //     }
        //     console.log(sumNumbers);
        // }

        // sum(1, 15);

    //Найти произведение всех целых чисел от 15 до 35

        // function mult (a, b) {
        //     let result = 1;
        //     for (let i = a; i <= b; i++) {
        //         result = result * i;
        //     }
        //     console.log(result);
        // }

        // mult(15, 35);

    //Найти среднее арифметическое всех целых чисел от 1 до 500

        // function average (a, b) {
        //     let result = 0,
        //         iter = 0;
        //     for (let i = a; i <= b; i++) {
        //         result = result + i;
        //         iter++
        //     }
        //     console.log(`${result / iter}`);
        // }

        // average(1, 500);

    //Вывести сумму только четных чисел в диапазоне от 30 до 80

        // function sum (a, b) {
        //     let result = 0;
        //     for (let i = a; i <= b; i++) {
        //         if(i % 2 == 0){
        //             result = result + i;
        //         }
        //     }
        //     console.log(result);
        // }

        // sum(30, 80);

    //Вывести все числа в диапазоне от 100 до 200 кратные 3

        // function third (a, b) {
        //     for (let i = a; i <= b; i++) {
        //         if(i % 3 == 0) {
        //             console.log(`${i}`);
        //         }
        //     }
        // }

        // third(100, 200);

    //Дано натуральное число. 
        // Найти и вывести на страницу все его делители.
        //Определить количество его четных делителей
        //Найти сумму его четных делителей

//             let naturalNumber = +prompt('Введите натуральное число'),
//                 dividers = '',
//                 colDividers = 0,
//                 sumDividers = 0;

//             for(let i = 1; i <= naturalNumber; i++) {
//                 if(Number.isInteger(naturalNumber / i)){
//                     dividers = dividers + `, ${i}`;
//                     if(i % 2 == 0){
//                         colDividers++;
//                         sumDividers = sumDividers + i;
//                     }
//                 }
//             }

//             alert(`натуральное число: ${naturalNumber},
// все целые делители данного числа: ${dividers.substring(1)},
// количество четных делителей: ${colDividers},
// сумма все четных делителей: ${sumDividers}`);

    //Напечатать полную таблицу умножения от 1 до 10

    // for(let i = 1; i <= 10; i++){
    //     for(let j = 1; j <= 10; j++){
    //         console.log(`${i} * ${j} = ${i * j}`);
    //     }
    // }

//ДЗ 8. Циклы посложнее
    //Вывести числа от 20 до 30 через пробел, используя шаг 0,5 (20 20,5 21 21,5….)
            
            // function halfNumber (a,b) {
            //     let result = '';
            //     for (let i = a; i <= b; i = i + 0.5){
            //         result = result + ` ${i}`;
            //     }
            //     console.log(result.substring(1));
            // }
            
            // halfNumber(20,58);

            // Мой изначальный кривой вариант, но рабочий)
                    // function halfNumber (a, b) {
                    //     let result = '';
                    //     for(let i = 20; i <= 30; i++){
                    //         result = result + ` ${i} ${i + 0.5}`;
                    //     }
                    //     console.log(result.substring(0, result.length - 5));
                    // }

                    // halfNumber(20, 30);
            
    //Один доллар стоит 27 гривен. Вывести данные с расчетом стоимости 10, 20, 30... 100 долларов

        // function exchange (a, b, step, exchangeRate) {
        //     let result = '';

        //     for(let i = a; i <= b; i = i + step) {
        //         result = result + `
        //         стоимость ${i} долларов = ${i * exchangeRate} гривен`            
        //     }
        //     console.log(result);
        // }

        // exchange(10, 100, 10, 27); 

    //Дано целое число. Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N

        // let naturalNumber = +prompt('Введите целое число'),
        //     result = '';
        
        // for (let i = 1; i <= 100; i++){
        //     if(Math.pow(i, 2) < naturalNumber){
        //         result = result + `, ${i}`;
        //     }
        // }
        // alert(`Все целые числа от 1 до 100 квадрат которых не привышает ${naturalNumber}: ${result.substring(1)}`);

     //Дано целое число. Выяснить, является ли оно простым (простым называется число, большее 1, не имеющих других делителей кроме 1 и самого себя).

        // let number = +prompt('Введите число'),
        //     counter = 0;

        // for(let i = 1; i <= number; i++){
        //     if(Number.isInteger(number / i)){
        //         counter++
        //     }
        // }
        // if(counter == 2) {
        //     alert('Это простое число.');
        // } else {
        //     alert('Это число не является простым.');
        // }

    //Дано некоторое число. Определить, можно ли получить это число путем возведения числа 3 в некоторую степень. (Например, числа 9, 81 можно получить, а 13 - нельзя)

        let number = +prompt('Введите число'),
            degree = 1,
            now = 1,
            result ='';
        while (now <= number){
            if(now === number){
                result = `Число ${number} можна получить путем возведения числа 3 в ${degree - 1} степень`;
            } else if(now !== number){
                result = `Число ${number} нельзя получить путем возведения числа 3 в степень`;  
            } 
            now = Math.pow(3, degree);
            degree++;
        }
        alert(result);
