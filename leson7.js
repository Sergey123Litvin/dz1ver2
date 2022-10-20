// ДЗ 14. Многоквартирный дом
    // Создать и описать сущности Многоквартирного дома, квартиры, жильца.
    // Добавить возможность создавать новые дома на определенное количество квартир
    // Не ограничивать количество жильцов в квартире

        
        // class House {
        //     constructor(numberOfApartments, numberOfTenantInApartment) {
        //         this.numberOfTenantInApartment = numberOfTenantInApartment;
        //         this.address = 'Street Wide, 4'
        //         this.apartments = [];
        //         for(let i = 0; i < numberOfApartments; i++){
        //             this.apartments[i] = new Apartment(i + 1, numberOfTenantInApartment); 
        //         } 
        //     }

        //     setAddress(newAddress){
        //         this.address = newAddress;
        //     }
        // }

        // class Apartment {
        //     constructor(apartmentNumber, numberOfTenant) {
        //         this.apartmentNumber = apartmentNumber;
        //         this.numberOfTenant = numberOfTenant;
        //         this.tenants = [];
        //         for(let i = 0; i < numberOfTenant; i++){
        //             this.tenants[i] = new Tenant();
        //         }
        //     }
        // }

        // class Tenant {
        //     constructor() {
        //         this.weight = Math.floor(Math.random() * (100 - 50)) + 50;
        //     }
        // }

        // const house = new House(4, 2);
        // console.log(house);


// ДЗ 15. Создаем сущности
    // Создать сущность человека
        // имя
        // возраст
        // Метод вывода данных
    // Создать сущность автомобиля:
        // Характеристики автомобиля отдельными свойствами
    // Методы:
        // Вывода на экран данных об этом автомобиле
        // Присвоения этого автомобиля владельцу (записать в автомобиль объект владельца)
        // Все данные о человеке и об автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека и т.д. по необходимости).
    // Максимально использовать функции

        // let human,
        //     auto;

        // class Human {
        //     constructor(name, age) {
        //         this.name = name;
        //         this.age = age;
        //     }
        //     getInfo()   {
        //         console.log({
        //             name: this.name,
        //             age: this.age
        //         });
        //     }
        // }

        // class Auto {
        //     constructor(brandAuto, yearOfIssue) {
        //         this.brandAuto = brandAuto;
        //         this.yearOfIssue = yearOfIssue;
        //         this.driver;
        //     }
        //     getInfo() {
        //         console.log({
        //             brandAuto: this.brandAuto,
        //             yearOfIssue: this.yearOfIssue,
        //             driver: this.driver
        //         });
        //     }
        //     setDriver(driver) {
        //         this.driver = driver;
        //     }
        // }

        // function createHuman() {
        //     let name = prompt('Введите имя'),
        //         age = +prompt('Введите возраст');
        //     if(typeof(name) === 'string' && name.length > 0 && name !== null && age > 0 && age < 125 && age !== NaN) {
        //         human = new Human(name, age);
        //     } else {
        //         alert('Введите данные корректно!');
        //         createHuman();
        //     }
        // }

        // function createAuto() {
        //     let brandAuto = prompt('Введите марку авто'),
        //         yearOfIssue = +prompt('Введите год выпуска авто числом в формате: 1999');
        //     if(typeof(brandAuto) === 'string' && brandAuto.length > 0 && brandAuto !== null && yearOfIssue > 1880 && yearOfIssue < 2023 && yearOfIssue !== NaN) {
        //         auto = new Auto(brandAuto, yearOfIssue);
        //     } else {
        //         alert('Введите данные корректно!');
        //         createAuto();
        //     }
        // }

        // function addingHumanToCar(car, human) {
        //     if(human.age >= 18) {
        //         car.setDriver(human);
        //     } else {
        //         console.log('Водителю меньше 18!')
        //     }
        // }



        // createHuman();
        // createAuto();
        // human.getInfo();
        // auto.getInfo();
        // addingHumanToCar(auto, human);
        // auto.getInfo();

// ДЗ 16. Гамбургеры
// Сеть фастфудов предлагает несколько видов гамбургеров:
    // - маленький (50 тугриков, 20 калорий)
    // - большой (100 тугриков, 40 калорий)
    // Гамбургер может быть с одним из нескольких видов начинок:
    // - сыром (+ 10 тугриков, + 20 калорий)
    // - салатом (+ 20 тугриков, + 5 калорий)
    // - картофелем (+ 15 тугриков, + 10 калорий)
    // Можно добавить добавки:
    // - посыпать приправой (+ 15 тугриков, 0 калорий)
    // - полить майонезом (+ 20 тугриков, + 5 калорий).

//     class Hamburger {

//         static SIZE_SMALL = 'SIZE_SMALL';
//         static SIZE_BIG = 'SIZE_BIG';
//         static STUFFING_CHEESE = 'STUFFING_CHEESE';
//         static STUFFING_SALAD = 'STUFFING_SALAD';
//         static STUFFING_POTATO = 'STUFFING_POTATO';
//         static TOPPING_MAYO = 'MAYO';
//         static TOPPING_SAUCE = 'SAUCE';

//         constructor(size, stuffing){
//             this.toppingPrice = 0;
//             this.toppingCalories = 0;

//             if(size === 'SIZE_SMALL') {
//                 this.price = 50;
//                 this.calories = 20;
//             } else if (size === 'SIZE_BIG') {
//                 this.price = 100;
//                 this.calories = 40;
//             }

//             if(stuffing === 'STUFFING_CHEESE') {
//                 this.price = this.price + 10;
//                 this.calories = this.calories + 20;
//             } else if(stuffing === 'STUFFING_SALAD') {
//                 this.price = this.price + 20;
//                 this.calories = this.calories + 5;
//             } else if(stuffing === 'STUFFING_POTATO') {
//                 this.price = this.price + 15;
//                 this.calories = this.calories + 10;
//             }
//         }

//         addTopping(topping) {
//             if(topping === 'MAYO') {
//                 this.toppingPrice += 20;
//                 this.toppingCalories += 5;
//             } else if(topping === 'SAUCE') {
//                 this.toppingPrice += 15;
//                 this.toppingCalories += 0;
//             }
//         }

//         calculateCalories() {
//             return this.calories + this.toppingCalories;
            
//         }

//         calculatePrice() {
//             return this.price + this.toppingPrice;
//         }

//     }

//    let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
//    hamburger.addTopping(Hamburger.TOPPING_MAYO);
//    console.log('Calories: ' + hamburger.calculateCalories());
//    console.log('Price: ' + hamburger.calculatePrice());
//    hamburger.addTopping(Hamburger.TOPPING_SAUCE);
//    console.log('Price with sauce: ' + hamburger.calculatePrice());



// ДЗ 17. Студент
    // Вам нужно сделать конструктор сущности Студент.
    // У Студента есть имя, фамилия, год рождения — это свойства. Есть массив с оценками, это тоже свойство. И есть возможность получить возраст студента и его средний бал — это методы.
    // Еще у всех Студентов есть по массиву одинаковой длины, в нем 25 элементов, изначально он не заполнен, но на 25 элементов. Это массив в котором отмечается посещаемость, каждый раз когда мы вызываем метод .present() на очередное пустое место в массив записывается true, когда вызываем .absent() — записывается false. Предусмотрите какую-нибудь защиту от того чтоб в массиве посещаемости не могло быть более 25 записей. Массив - это свойство, present и absent — методы.
    // Последний метод: .summary(), проверяет среднюю оценку, и среднее посещение(количествоПосещений/количествоЗанятий), и если средняя оценка больше 90 а среднее посещение больше 0.9, то метод summary, возвращает строку "Молодец!", если одно из этих значений меньше, то — Хорошо, но можно лучше", если оба ниже — "Редиска!".
    // Не забудьте после того как напишите этот конструктор, создать 2-3 экземпляра (конкретных студентов) и показать использование этих методов.

    // class Student {
    //     constructor(name, surname, yearOfBirth, arrayProgress) {
    //         this.name = name;
    //         this.surname = surname;
    //         this.yearOfBirth = yearOfBirth;
    //         this.arrayProgress = arrayProgress;
    //         this.attendance = [];
    //         this.attendance.length = 25;
    //     }

    //     getAge(){
    //         return 2022 - this.yearOfBirth;
    //     }

    //     getAverageRating() {
    //         let totalAverage = 0,
    //             colAverage = 0;
    //         for(let i of this.arrayProgress) {
    //             totalAverage += i;
    //             colAverage++
    //         }
    //         return totalAverage/colAverage
    //     }
        
    //     present() {
    //         for(let i = 0; i < 25; i++) {
    //             if( this.attendance[i] === undefined) {
    //                 this.attendance[i] = true;
    //                 i = 25;
    //             }
    //         }
    //     }

    //     absent() {
    //         for(let i = 0; i < 25; i++) {
    //             if( this.attendance[i] === undefined) {
    //                 this.attendance[i] = false;
    //                 i = 26;
    //             }
    //         }
    //     }

    //     summary() {
    //         let averageRating = this.getAverageRating(),
    //             attendedClasses = 0,
    //             numberOfLessons = 0;
    //         this.attendance.forEach(elem => {
    //             if(elem === true){
    //                 attendedClasses++;
    //             }
    //             if(elem === true || elem === false){
    //                 numberOfLessons++;
    //             }
    //         });

    //         let averageAttended = attendedClasses / numberOfLessons;
    //         console.log(averageRating);
    //         console.log(averageAttended);

    //         if(averageRating >= 90 && averageAttended >= 0.9) {
    //             console.log('Молодец!');
    //         } else if(averageRating >= 90 && averageAttended <= 0.9 || averageRating <= 90 && averageAttended >= 0.9 ){
    //             console.log('Хорошо, но можно лучше!');
    //         } else {
    //             console.log('Редиска!');
    //         }
    //     }
    // }

    // let student1 = new Student('Валентин','Пирожков',1995,[98,78,68,59,89]);
    // console.log(student1);
    // console.log(`Средняя оценка: ${student1.getAverageRating()}`);
    // console.log(`Возраст: ${student1.getAge()}`);
    // student1.present();
    // student1.present();
    // student1.present();
    // student1.present();
    // student1.present();
    // student1.present();
    // student1.present();
    // student1.present();
    // student1.present();
    // student1.absent();
    // console.log(student1);
    // student1.summary();

    // let student2 = new Student('Игорь','Гулящий',1992,[56,75,68,59,89,47,27,83]);
    // console.log(student2);
    // console.log(`Средняя оценка: ${student2.getAverageRating()}`);
    // console.log(`Возраст: ${student2.getAge()}`);
    // student2.present();
    // student2.present();
    // student2.present();
    // student2.present();
    // student2.present();
    // student2.present();
    // student2.present();
    // student2.present();
    // student2.present();
    // student2.absent();
    // student2.absent();
    // student2.absent();
    // student2.absent();
    // student2.absent();
    // student2.absent();
    // student2.absent();
    // student2.absent();
    // console.log(student2);
    // student2.summary();

    // let student3 = new Student('Маша','Афонина',1998,[98,99,100,89,96,97,93,95]);
    // console.log(student3);
    // console.log(`Средняя оценка: ${student3.getAverageRating()}`);
    // console.log(`Возраст: ${student3.getAge()}`);
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.present();
    // student3.absent();
    // student3.present();
    // student3.present();
    // student3.present();
    // console.log(student3);
    // student3.summary();

// ДЗ 18. SuperMath
    // Создать класс SuperMath.
    // Добавить к экземпляру метод - check(obj), параметр obj которого имеет свойства X, Y, znak. Метод должен подтвердить у пользователя хочет ли он произвести действие znak c Х и У. Если - да, сделать математическое действие znak(которое описано в прототипе), иначе - запросить ввод новых данных через метод input() класса SuperMath. Пример обекта: `obj = { X:12, Y:3, znak: “/”}`, возможные варианты znak=> `+ - / * %`.
    // При вводе znak нужно сделать проверку корректности ввода на возможные математические действия

    class SuperMath {
        constructor() {
            this.obj = {};
        }

        result(){
            if(this.obj.znak === "+") {
                alert(`${this.obj.x} + ${this.obj.y} = ${this.obj.x + this.obj.y}`);
            } else if(this.obj.znak === "-") {
                alert(`${this.obj.x} - ${this.obj.y} = ${this.obj.x - this.obj.y}`);
            } else if(this.obj.znak === "/") {
                alert(`${this.obj.x} / ${this.obj.y} = ${this.obj.x / this.obj.y}`);
            } else if(this.obj.znak === "*") {
                alert(`${this.obj.x} * ${this.obj.y} = ${this.obj.x * this.obj.y}`);
            } else if(this.obj.znak === "%") {
                alert(`${this.obj.x} % ${this.obj.y} = ${this.obj.x % this.obj.y}`);
            }
        }

        input() {    
            let x = +prompt('Введите первое число'),
                y = +prompt('Введите второе число'),
                znak = prompt('Введите желаемую операцию: + - / * %');
            
            if(!isNaN(x) && !isNaN(y) && znak === '+' || znak === '-' || znak === '/' || znak === '*' || znak === '%') {
                this.obj.x = x;
                this.obj.y = y;
                this.obj.znak = znak;
            } else {
                alert('Введите корректные данные!');
                this.input();
            }
        }

        check(obj) {
            let yesOrNo = confirm(`Желаете проделать математическую операцию: ${obj.znak} с числами: ${obj.x} и ${obj.y}?`);
            
            if(yesOrNo === true) {
                this.result();
            } else {
                this.input();
            }
        }
    }

    let math = new SuperMath();
    math.input();
    math.check(math.obj);

    