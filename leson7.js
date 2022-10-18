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

        let human,
            auto;

        class Human {
            constructor(name, age) {
                this.name = name;
                this.age = age;
            }
            getInfo()   {
                console.log({
                    name: this.name,
                    age: this.age
                });
            }
        }

        class Auto {
            constructor(brandAuto, yearOfIssue) {
                this.brandAuto = brandAuto;
                this.yearOfIssue = yearOfIssue;
                this.driver;
            }
            getInfo() {
                console.log({
                    brandAuto: this.brandAuto,
                    yearOfIssue: this.yearOfIssue,
                    driver: this.driver
                });
            }
            setDriver(driver) {
                this.driver = driver;
            }
        }

        function createHuman() {
            let name = prompt('Введите имя'),
                age = +prompt('Введите возраст');
            if(typeof(name) === 'string' && name.length > 0 && name !== null && age > 0 && age < 125 && age !== NaN) {
                human = new Human(name, age);
            } else {
                alert('Введите данные корректно!');
                createHuman();
            }
        }

        function createAuto() {
            let brandAuto = prompt('Введите марку авто'),
                yearOfIssue = +prompt('Введите год выпуска авто числом в формате: 1999');
            if(typeof(brandAuto) === 'string' && brandAuto.length > 0 && brandAuto !== null && yearOfIssue > 1880 && yearOfIssue < 2023 && yearOfIssue !== NaN) {
                auto = new Auto(brandAuto, yearOfIssue);
            } else {
                alert('Введите данные корректно!');
                createAuto();
            }
        }

        function addingHumanToCar(car, human) {
            if(human.age >= 18) {
                car.setDriver(human);
            } else {
                console.log('Водителю меньше 18!')
            }
        }



        createHuman();
        createAuto();
        human.getInfo();
        auto.getInfo();
        addingHumanToCar(auto, human);
        auto.getInfo();

