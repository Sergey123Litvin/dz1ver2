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

        shareDrink () {
          let secondDrink;
          
          if(this.constructor.name == 'CoffeeRecept') {
            secondDrink = new CoffeeRecept();
          } else if(this.constructor.name == 'EspressoRecept') {
            secondDrink = new EspressoRecept();
          } else if(this.constructor.name == 'AmericanoRecept') {
            secondDrink = new AmericanoRecept(0);
          } else if(this.constructor.name == 'LatteRecept') {
            secondDrink = new LatteRecept(0);
          } else if(this.constructor.name == 'DoubleLatteRecept') {
            secondDrink = new DoubleLatteRecept();
          }

          secondDrink.#coast = this.#coast / 2;  
          secondDrink.#sugar = this.#sugar / 2;
          secondDrink.volume = this.volume / 2;
          secondDrink.coffee = this.coffee / 2;
          secondDrink.water = this.water / 2;
          secondDrink.milk = this.milk / 2;

          this.#coast = this.#coast / 2;  
          this.#sugar = this.#sugar / 2;
          this.volume = this.volume / 2;
          this.coffee = this.coffee / 2;
          this.water = this.water / 2;
          this.milk = this.milk / 2;
          return secondDrink;
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
      
      // let espresso = new EspressoRecept();
      // console.log(espresso.getInfo());
      // espresso.setSugar(3);
      // console.log(espresso.getInfo());
      // console.log(new Cup(espresso));

      let americano = new AmericanoRecept(20);
      console.log(americano);
      americano.addSugar();
      americano.addWater(110);
      console.log(americano.getInfo());
      console.log(new Cup(americano));
     
      let secondDrink = americano.shareDrink();
      console.log(americano.getInfo());
      secondDrink.addSugar();
      console.log(secondDrink.getInfo());












 