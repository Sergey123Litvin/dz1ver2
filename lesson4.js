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
    
        const arr = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];

        let sumPlusElem = 0,
            colPlusElem = 0,
            minElem = arr[0],
            numberMinElem,
            maxElem = arr[0],
            numberMaxElem,
            colMinusElem = 0,
            colEvenPlusElem = 0,
            colOddPlusElem = 0,
            sumEvenPlusElem = 0,
            sumOddPlusElem = 0,
            multPlusElem = 1;

        arr.forEach(elem =>{
            if(elem > 0){
                sumPlusElem += elem;
                colPlusElem++;
                multPlusElem *= elem;
                if(elem % 2 === 0){
                    colEvenPlusElem++;
                    sumEvenPlusElem += elem;
                } else {
                    colOddPlusElem++;
                    sumOddPlusElem += elem;
                }
            } else if(elem < 0){
                colMinusElem++;
            }
            if(minElem > elem){
                minElem = elem;
            }
            if(maxElem < elem){
                maxElem = elem;
            }
        });
        numberMinElem = arr.indexOf(minElem);
        numberMaxElem = arr.indexOf(maxElem);
     
        console.log(`Сумма всех положительных элементов: ${sumPlusElem}`);
        console.log(`Количество положительных элементов: ${colPlusElem}`);
        console.log(`Минимальный элемент массива: ${minElem} `);
        console.log(`Порядковый номер минимального элемента: ${numberMinElem}`);
        console.log(`Максимальный элемент массива: ${maxElem} `);
        console.log(`Порядковый номер максимального элемента: ${numberMaxElem}`);
        console.log(`Количество отрицатильных элементов: ${colMinusElem}`);
        console.log(`Количество нечетных положительных элементов: ${colOddPlusElem}`);
        console.log(`Количество четных положительных элементов: ${colEvenPlusElem}`);
        console.log(`Сумма четных положительных элементов: ${sumEvenPlusElem}`);
        console.log(`Сумма нечетных положительных элементов: ${sumOddPlusElem}`);
        console.log(`Произведение положительных элементов: ${multPlusElem}`);

    // Найти наибольший среди элементов массива, остальные обнулить.

        let bigElem = arr[0],
            bigElemIndex;

        arr.forEach(elem =>{
            if(bigElem < elem){
                bigElem = elem;
            }
        });
        bigElemIndex = arr.indexOf(bigElem);
        
        for (let i = 0; i < arr.length; i++){
            if(i !== bigElemIndex){
                arr[i] = 0;
            }
        }
        console.log(arr);

        

       


        