class Hamburger {
    static SIZE_SMALL = { 
        price: 50, 
        calories: 20 
    }
    static SIZE_BIG = { 
        price: 100, 
        calories: 40 
    }

    static STUFFING_CHEESE = { 
        price: 10, 
        calories: 20 
    }
    static STUFFING_SALAD = { 
        price: 20, 
        calories: 5 
    }
    static STUFFING_POTATO = { 
        price: 15, 
        calories: 10 
    }

    static TOPPING_SAUCE = { 
        price: 15, 
        calories: 0 
    }
    static TOPPING_MAYO = { 
        price: 20, 
        calories: 5 
    }

    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }

    addTopping(topping) {
        this.toppings.push(topping);
        return this.toppings;
    }

    calculate() {
        return this.size.calories + this.stuffing.calories + this.toppings.reduce((sum, topping) => sum + topping.calories, 0);
    }

    calculatePrice() {
        return this.size.price + this.stuffing.price + this.toppings.reduce((sum, topping) => sum + topping.price, 0);
    }
}


// гамбургери з сирною начинкою
const hamburgerSmall = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
const hamburgerBig = new Hamburger(Hamburger.SIZE_BIG, Hamburger.STUFFING_SALAD);


// добавка майонезу
hamburgerSmall.addTopping(Hamburger.TOPPING_MAYO);
hamburgerBig.addTopping(Hamburger.TOPPING_MAYO);


// запитаємо скільки там калорій
console.log("Small hamburger (cheese) calories: " + hamburgerSmall.calculate() + " kcal");
console.log("Big hamburger (salad) calories: " + hamburgerBig.calculate() + " kcal");

// скільки коштує
console.log("Small hamburger price: " + hamburgerSmall.calculatePrice() + " ₴");
console.log("Big hamburger price: " + hamburgerBig.calculatePrice() + " ₴");

// я тут передумав і вирішив додати ще приправу
hamburgerSmall.addTopping(Hamburger.TOPPING_SAUCE);
hamburgerBig.addTopping(Hamburger.TOPPING_SAUCE);

// А скільки тепер коштує?
console.log("Small hamburger price with sauce: " + hamburgerSmall.calculatePrice()+ " ₴");
console.log("Big hamburger price with sauce: " + hamburgerBig.calculatePrice()+ " ₴");
