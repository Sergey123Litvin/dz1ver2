//ДЗ 9. Массив
    // Создать массив, длину и элементы которого задаёт пользователь.
    // Отсортировать массив по возрастанию.
    // Удалить элементы из массива с 2 по 4 (включительно!).
    // По мере изменений, выводить содержимое массива на страницу.

        let string = prompt('Введите числа для создания массива через пробел');
        
        let arr = string.split(' ');
        console.log(arr);
        
        arr = arr.sort(compareNum);
        function compareNum(a, b){   // для правильной сортировки
            return a - b;
        }
        console.log(arr);

        arr.splice(2, 3);
        console.log(arr);



        

       


        