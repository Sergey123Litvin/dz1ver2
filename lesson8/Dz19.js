// Пофиксить https://github.com/SimonovAlex/hillel/pull/8
    // Добавить сущность "стаканчик" есть такие размеры:
    // 100 мл
    // 250 мл
    // 500 мл
    // Объём не может быть больше чем стакан.
    // Добавить возможность разделить напиток на 2 стакана (будет 2 напитка отдельных).


    class CoffeeRecept {

        #coast = 0;  
        #sugar = 0;
        volume = 0;
        coffee = 0;
        water = 0;
        milk = 0;
      
        constructor(){
          // this.volume = volume;
          // this.coffee = volume;
      
          // this.#coast = coast;
        }
      
        setSugar(value = 0){
          this.#sugar = this.#sugar + value;
          this.#coast = this.#coast + value * 5;
        }
      
        addSugar(){
          this.#sugar = this.#sugar + 1;
          this.#coast = this.#coast + 5;
        }
      
        get coast(){
          return this.#coast;
        }
      
        getSugar(){
          return this.#sugar;
        }
      
        cookingEspresso(mult = 1) {
          this.coffee = this.coffee + 15 * mult;
          this.#coast = this.#coast + 20 * mult;
          this.volume = this.volume + 15 * mult;
        }
      
        getInfo() {
          return {
            coffee : this.coffee,
            volume: this.volume,
            coast: this.#coast,
            sugar: this.#sugar,
            water: this.water,
            milk: this.milk,
          }
        }

        shareDrink() {
          return {
            firstDrinkCoffee: this.coffee / 2,
            firstDrinkVolume: this.volume / 2,
            firstDrinkCoast: this.#coast / 2,
            firstDrinkSugar: this.#sugar / 2,
            firstDrinkWater: this.water / 2,
            firstDrinkMilk: this.milk / 2,
            secondDrinkCoffee: this.coffee / 2,
            secondDrinkVolume: this.volume / 2,
            secondDrinkCoast: this.#coast / 2,
            secondDrinkSugar: this.#sugar / 2,
            secondDrinkWater: this.water / 2,
            secondDrinkMilk: this.milk / 2,
          }
        }
      }
      
      // const obj = {
      //   test: function(){
      //     console.log('test')
      //   }
      
      // };
      
      // obj.test();
      
      // const coffee = new CoffeeRecept(20, 10);
      
      // for(let i = 0; i < 3; i ++){
      //   coffee.addSugar();
      // }
      // coffee.setSugar(4);
      
      
      // console.log(coffee.getSugar(), coffee.coast)
      
      class EspressoRecept extends CoffeeRecept{
        constructor(){
          super();
          this.cookingEspresso();
        }
      }
        
      class AmericanoRecept extends CoffeeRecept {
        constructor(water){
          super();
          this.cookingEspresso();
          this.water = water;
          this.volume = this.volume + water;
        }
      
        getInfo(){
          const result = super.getInfo();
          return {
            ...result,
            water: this.water
          }
        }
      
        addWater(water){
          this.water = this.water + water;
          this.volume = this.volume + water;
        }
      }
      
      class LatteRecept extends CoffeeRecept{
        constructor(milk){
          super();
          this.cookingEspresso();
          this.volume = this.volume + milk;
          this.coffee = this.coffee;
          this.milk = milk;
        }
      }
       
      class DoubleLatteRecept {
        constructor(){
          const firstLatte = new LatteRecept(50);
          const secondLatte = new LatteRecept(50);
      
          this.volume = firstLatte.volume + secondLatte.volume;
          this.coffee = firstLatte.coffee + secondLatte.coffee;
          this.milk = firstLatte.milk + secondLatte.milk;
        }
      }

      class Cup {
        size;
        constructor(coffee) {
          if(coffee.volume <= 100) {
            this.size = 'small';
          } else if(coffee.volume > 100 && coffee.volume <= 250) {
            this.size =  'medium';
          } else if(coffee.volume > 250 && coffee.volume <= 500) {
            this.size =  'big';
          } else {
            this.size ='Ваш напиток не влазит в стакан!';
          }
        }
      }
      

      let espresso = new EspressoRecept();
      console.log(espresso.getInfo());
      espresso.setSugar(3);
      console.log(espresso.getInfo());
      console.log(new Cup(espresso));

      let americano = new AmericanoRecept(20);
      console.log(americano);
      americano.addSugar();
      americano.addWater(110);
      console.log(americano.getInfo());
      console.log(new Cup(americano));
      console.log(americano.shareDrink());
