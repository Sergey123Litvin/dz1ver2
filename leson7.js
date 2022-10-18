// ДЗ 14. Многоквартирный дом
    // Создать и описать сущности Многоквартирного дома, квартиры, жильца.
    // Добавить возможность создавать новые дома на определенное количество квартир
    // Не ограничивать количество жильцов в квартире

        
        class House {
            constructor(numberOfApartments, numberOfTenantInApartment) {
                this.numberOfTenantInApartment = numberOfTenantInApartment;
                this.address = 'Street Wide, 4'
                this.apartments = [];
                for(let i = 0; i < numberOfApartments; i++){
                    this.apartments[i] = new Apartment(i + 1, numberOfTenantInApartment); 
                } 
            }

            setAddress(newAddress){
                this.address = newAddress;
            }
        }

        class Apartment {
            constructor(apartmentNumber, numberOfTenant) {
                this.apartmentNumber = apartmentNumber;
                this.numberOfTenant = numberOfTenant;
                this.tenants = [];
                for(let i = 0; i < numberOfTenant; i++){
                    this.tenants[i] = new Tenant();
                }
            }
        }

        class Tenant {
            constructor() {
                this.weight = Math.floor(Math.random() * (100 - 50)) + 50;
            }
        }

        const house = new House(4, 2);
        console.log(house);

