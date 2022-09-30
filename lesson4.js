//ДЗ 9. Массив
    // Создать массив, длину и элементы которого задаёт пользователь.
    // Отсортировать массив по возрастанию.
    // Удалить элементы из массива с 2 по 4 (включительно!).
    // По мере изменений, выводить содержимое массива на страницу.

        // const string = prompt('Введите числа для создания массива через пробел');
        
        // let arr = string.split(' ');
        // console.log(arr);
        
        // arr = arr.sort(compareNum);
        // function compareNum(a, b){   // для правильной сортировки
        //     return a - b;
        // }
        // console.log(arr);

        // arr.splice(2, 3);
        // console.log(arr);


// ДЗ 10. Поиск в массиве
    // Дан массив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
    // Найти сумму и количество положительных элементов.               
    // Найти минимальный элемент массива и его порядковый номер.
    // Найти максимальный элемент массива и его порядковый номер.
    // Определить количество отрицательных элементов.
    // Найти количество нечетных положительных элементов.
    // Найти количество четных положительных элементов.
    // Найти сумму четных положительных элементов.
    // Найти сумму нечетных положительных элементов.
    // Найти произведение положительных элементов.
    
    //     const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

    //     let sumPlusElem = 0,
    //         colPlusElem = 0,
    //         minElem = arr[0],
    //         numberMinElem,
    //         maxElem = arr[0],
    //         numberMaxElem,
    //         colMinusElem = 0,
    //         colEvenPlusElem = 0,
    //         colOddPlusElem = 0,
    //         sumEvenPlusElem = 0,
    //         sumOddPlusElem = 0,
    //         multPlusElem = 1;

    //     arr.forEach(elem =>{
    //         if(elem > 0){
    //             sumPlusElem += elem;
    //             colPlusElem++;
    //             multPlusElem *= elem;
    //             if(elem % 2 === 0){
    //                 colEvenPlusElem++;
    //                 sumEvenPlusElem += elem;
    //             } else {
    //                 colOddPlusElem++;
    //                 sumOddPlusElem += elem;
    //             }
    //         } else if(elem < 0){
    //             colMinusElem++;
    //         }
    //         if(minElem > elem){
    //             minElem = elem;
    //         }
    //         if(maxElem < elem){
    //             maxElem = elem;
    //         }
    //     });
    //     numberMinElem = arr.indexOf(minElem);
    //     numberMaxElem = arr.indexOf(maxElem);
     
    //     console.log(`Сумма всех положительных элементов: ${sumPlusElem}`);
    //     console.log(`Количество положительных элементов: ${colPlusElem}`);
    //     console.log(`Минимальный элемент массива: ${minElem} `);
    //     console.log(`Порядковый номер минимального элемента: ${numberMinElem}`);
    //     console.log(`Максимальный элемент массива: ${maxElem} `);
    //     console.log(`Порядковый номер максимального элемента: ${numberMaxElem}`);
    //     console.log(`Количество отрицатильных элементов: ${colMinusElem}`);
    //     console.log(`Количество нечетных положительных элементов: ${colOddPlusElem}`);
    //     console.log(`Количество четных положительных элементов: ${colEvenPlusElem}`);
    //     console.log(`Сумма четных положительных элементов: ${sumEvenPlusElem}`);
    //     console.log(`Сумма нечетных положительных элементов: ${sumOddPlusElem}`);
    //     console.log(`Произведение положительных элементов: ${multPlusElem}`);

    // // Найти наибольший среди элементов массива, остальные обнулить.

    //     let bigElem = arr[0],
    //         bigElemIndex;

    //     arr.forEach(elem =>{
    //         if(bigElem < elem){
    //             bigElem = elem;
    //         }
    //     });
    //     bigElemIndex = arr.indexOf(bigElem);
        
    //     for (let i = 0; i < arr.length; i++){
    //         if(i !== bigElemIndex){
    //             arr[i] = 0;
    //         }
    //     }
    //     console.log(arr);


// ДЗ 11. Счета пользователей
       
    //Дан массив объектов. Вывести массив телефонных номеров пользователей, у которых баланс более 2000 долларов. И найти сумму всех балансов пользователей

        let users = [
            {
            "index": 0,
            "isActive": true,
            "balance": "$2,226.60",
            "name": "Eugenia Sawyer",
            "gender": "female",
            "phone": "+1 (840) 583-3207",
            "address": "949 John Street, Rose, Puerto Rico, 1857"
            },
            {
            "index": 1,
            "isActive": true,
            "balance": "$2,613.77",
            "name": "Pauline Gallegos",
            "gender": "female",
            "phone": "+1 (985) 593-3328",
            "address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
            },
            {
            "index": 2,
            "isActive": false,
            "balance": "$3,976.41",
            "name": "Middleton Chaney",
            "gender": "male",
            "phone": "+1 (995) 591-2478",
            "address": "807 Fleet Walk, Brutus, Arkansas, 9783"
            },
            {
            "index": 3,
            "isActive": true,
            "balance": "$1,934.58",
            "name": "Burns Poole",
            "gender": "male",
            "phone": "+1 (885) 559-3422",
            "address": "730 Seba Avenue, Osage, Alabama, 6290"
            },
            {
            "index": 4,
            "isActive": true,
            "balance": "$3,261.65",
            "name": "Mcfadden Horne",
            "gender": "male",
            "phone": "+1 (942) 565-3988",
            "address": "120 Scholes Street, Kirk, Michigan, 1018"
            },
            {
            "index": 5,
            "isActive": false,
            "balance": "$1,790.56",
            "name": "Suzette Lewis",
            "gender": "female",
            "phone": "+1 (837) 586-3283",
            "address": "314 Dunne Place, Bawcomville, Guam, 9053"
            }
            ]
        
        let usersPhone = [],
            userBalance,
            sumUserBalance = 0;

        users.forEach(user =>{
            userBalance = +user.balance.replace(/[^0-9.]/g,'');  //удаляем все элементы в строке кроме цифр и точек и переводим в числовой тип
            sumUserBalance += userBalance;
            if(userBalance > 2000){
                usersPhone.push(user.phone);
            }
        });

        console.log(usersPhone);
        console.log(`Сумма всех балансов пользователей: $ ${sumUserBalance.toFixed(2)}`); // Округляем число до 2го знака после запятой
