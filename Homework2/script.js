// const goodsItem = {
//     name: 'T-Shirt',
//     price: 100,
//     quantity: 10,
//     buy: function(count = 1) {
//         this.quantity -= count;
//     }
// };

function goodsItem(name, price, quantity = 1){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.buy = function(count = 1) {
        this.quantity -= count;
    }
}

goodsItem.prototype.add = function(count = 1) {
    this.quantity += count;
};

const item1 = new goodsItem('T-Shirt_1', 200, 10);
const item2 = new goodsItem('T-Shirt_2', 500, 5);

console.log(item1, item2);
item1.buy(1);
item2.buy(5);
item1.add(5);
console.log(item1, item2);

function foodItem(name, price, quantity = 1, expires = 24){
    goodsItem.call(this, name, price, quantity);
    this.expires = expires;
}

foodItem.prototype = {...goodsItem.prototype};
foodItem.prototype.constructor = foodItem;

const item3 = new foodItem('Apple', 20, 100, 72);
item3.add(2);
console.log(item3);


class GoodsItem {
    constructor(name, price, quantity = 1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }

    buy(count = 1) {
        this.quantity -= count;
    }

    add(count = 1) {
        this.quantity += count;
    }
}

class FoodItem extends GoodsItem {
    constructor(name, price, quantity = 1, expires = 24){
        super(name, price, quantity);
        this.expires = expires;
        this.decay();
    }

    buy(count = 1){
        this.quantity -= count * 2;
    }

    // private | protected
    decay(){
        setInterval(
            () => this.expires--,
            1000
        );
    }
}

class ClothItem extends GoodsItem {
    constructor(name, price, quantity = 1, size = 42){
        super(name, price, quantity);
        this.size = size;
    }

    buy(count = 1){
        super.buy(count);
        this.price *= 0.95;
    }
}

class CartItem extends GoodsItem{
    constructor(name, price, quantity, mass, )
}

class Catalog {
    constructor(goods = []){ // goods: []<GoodsItem>
        this.goods = goods;
    }

    removeItem(id){
        this.goods.splice(id, 1); // splice(id, 0, item4, ...items)
    }

    totalPrice(){
        this.goods.reduce((acc, el) => acc + el.price * el.quantity, 0) //расчет цены товаров в массиве, учитывая их количество
}

    render(){
        const renderGoodsItem = ({title = "Element", price = 100}) => document.createElement("div").innerHTML = `<h3>${title}</h3><p>${price}</p>`;

        const renderItems = items => items.map(renderGoodsItem).join(""); 

        document.getElementById('catalog').innerHTML = renderItems(goods);

    }
}

const item4 = new GoodsItem('Pants', 500, 20);
const item5 = new FoodItem('Pineapple', 300, 20, 24);
const item6 = new ClothItem('Jeans', 600, 40, 46);

console.log(item4, item5, item6);

const arrItems = [item4, item5, item6];

for(let i of arrItems){
    i.buy(Math.round(Math.random() * 10 + 1));
}

console.log(item4, item5, item6);


/*class Cart {
    constructor () {
        по сути, тут должен быть массив товаров, т.е. goods = []
    }
    getItem(){} - принятие товара(массива товаров), видимо, откуда-то из local storage, и перерисовка
    render(){} - отрисовка(перерисовка) корзины
    delete(id){} - удаление товара и перерисовка  //думаю, это скорее должно быть в методах Cart, а не CartItem
    clear(){} - очистка корзины
    changeCount(id){} - меняем количество товара и отправляем информацию об этом
    calculatePrice(){} - подсчет цены товаров
    calculateQuantity(){} - подсчет количества товаров в корзине
    calculateDelivery(){} - расчет доставки. Вроде как существуют сторонние сервисы расчета, соответственно, отправляем им параметры и получаем ответ
    discount(){} - принимает какую-то информацию(промокод или, например, если общая сумма заказа 10000руб - скидка 10%), пересчитывает цену
    goPay(){} - отправляет итоговые данные в форму оплаты
}

class CartItem {
    /*
    constructor (id, name, price, quantity, weight, volume, variations)
    Собственно, все свойства по названиям, variations - это возможность выбора вариаций товара, добавки и т.д.
    Volume и weight могут быть важны для расчета доставки.
    По сути, элемент корзины должен наследовать характеристики единицы товара 
   
    methods(){
        render(){} - отрисовка элемента
        
        addAdditions(){} - обработка и изменение каких-то дополнительных свойств(вариаций) товара
        deleteAdditions(){} - удаление доп.свойств
        getAdditions(){} - узнать доп.свойства
    }
}
*/


// Все равно уже не успеваю это сделать, хоть и очень любопытно!
class Hamburger {
    constructor(size, stuffing)
    addTopping(topping) {    // Добавить добавку }
    removeTopping(topping) { // Убрать добавку }
    getToppings(topping) {   // Получить список добавок }
    getSize() {              // Узнать размер гамбургера }
    getStuffing() {          // Узнать начинку гамбургера }
    calculatePrice() {       // Узнать цену }
    calculateCalories() {    // Узнать калорийность }
  }
  



let obj1 = {};
let obj2 = {};

obj2 = obj1; // Object.assign({}, obj1) | Object.create(obj1) | {...obj1}