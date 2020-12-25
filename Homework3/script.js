/*const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
    if(this.readyState === 4){
        console.log(this.responseText);
        console.log(this.responseXML);
        const res = JSON.parse(this.responseText);
        console.log(res);
        console.log(JSON.stringify(res));
    }
};

xhr.open(
    'GET',
    'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
    true
);
// xhr.setRequestHeader('Content-Type', 'application/xml');

xhr.send();



/*const str = '';
console.log(1235);

// setTimeout(
//     () => {console.log(1)},
//     0
// );

// setTimeout(
//     () => {console.log(2)},
//     1000
// );

const func = (p1, p2, p3, cb) => {
    setTimeout(
        () => {
            console.log(1);
            // ...
            const pr = p1 + p2 + p3; 
            cb(pr);
        },
        1000
    );
};

func(1, 2, 3, console.log);

// const promise = new Promise((resolve, reject) => {
//     setTimeout(
//         () => Math.round(Math.random() * 100) % 2 ? resolve('Success') : reject('Error'),       
//         1000
//     );
// });

// promise.then((res) => {
//     console.log(res);
//     //return new Promise(/* ... */
// }).catch(console.error);//.then(/* ... */)


/*const fetchPromise = fetch(
    'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
    {
        method: 'GET'
    }
);
console.log('fetchPromise', fetchPromise);

const getRawDataPromise = fetchPromise.then(res => res.json());
console.log('getRawDataPromise', getRawDataPromise);

const dataPromise = getRawDataPromise.then(res => console.log('res', res));
console.log('dataPromise', dataPromise);*/

class CatalogItem {
    constructor (id_product, product_name, price) {
        this.id_product = id.product;
        this.product_name = product_name;
        this.price = price
    }

    

}

class Catalog {

    constructor(){
        this.goods = [];

        this.getGoods();
        this.render()
    }

    getGoods() {
        fetch(
            'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
            {
                method: 'GET'
            }
        ).then(res => res.json()).then(res => {
            this.goods = res.map(item => new CatalogItem(...item));
        }
        )//.then(res => this.render(res)); я правильно думаю, что так можно было бы попробовать что-то сделать, но на один then раньше, когда был res.json()?
    }

    render() {
       const renderGoodsItem = ({title = "Element", price = 100}) => document.createElement("div").innerHTML = `<h3>${title}</h3><p>${price}</p>`;

        const renderItems = items => this.goods.map(renderGoodsItem).join(""); 

        document.getElementById('catalog').innerHTML = renderItems(this.goods);
        
    }
}

class CartItem {
    constructor (id_product, product_name, price) {
        this.id_product = id.product;
        this.product_name = product_name;
        this.price = price
    }
}

class Cart {
    constructor () {
        this.cartArr = [];
        //по сути, тут должен быть массив товаров, т.е. goods = []
        this.getBasket();
        this.render()
    }

    render() {
        const renderGoodsItem = ({title = "Element", price = 100}) => document.createElement("div").innerHTML = `<h3>${title}</h3><p>${price}</p>`;
 
         const renderItems = items => this.cartArr.map(renderGoodsItem).join(""); 
 
         document.getElementById('cart').innerHTML = renderItems(this.cartArr);
         
     }

    getBasket() {
        fetch(
            'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json',
            {
                method: 'GET'
            }
        ).then(res => res.json()).then(res => {
            this.cartArr = res.map(item => new CartItem(...item));
        }
        )
        this.render();
    }

    addToCart(id){
        this.cartArr.push(id)
        fetch(
            'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/addToBasket.json',
            {
                method: 'POST' //Получается, мы "отправляем сущность к ресурсу" (как написано в методичке)
            }
            //body: JSON.stringify(this.cartArr) Гугл говорит, что вроде еще что-то подобное должно быть 
        )
        //и по логике дальше мы должны вывести обновленную корзину, т.е.
        this.getbasket();
    } 

    deleteFromCart(id) {
        this.cartArr.splice(id, 1);
        fetch(
            'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/deleteFromBasket.json',
            {
                method: 'POST' 
            } //body: JSON.stringify(this.cartArr)
        )
        this.getBasket();
    }
    /*- принятие товара(массива товаров), видимо, откуда-то из local storage, и перерисовка
    render(){} - отрисовка(перерисовка) корзины
    delete(id){} - удаление товара и перерисовка  //думаю, это скорее должно быть в методах Cart, а не CartItem
    clear(){} - очистка корзины
    changeCount(id){} - меняем количество товара и отправляем информацию об этом
    calculatePrice(){} - подсчет цены товаров
    calculateQuantity(){} - подсчет количества товаров в корзине
    calculateDelivery(){} - расчет доставки. Вроде как существуют сторонние сервисы расчета, соответственно, отправляем им параметры и получаем ответ
    discount(){} - принимает какую-то информацию(промокод или, например, если общая сумма заказа 10000руб - скидка 10%), пересчитывает цену
    goPay(){} - отправляет итоговые данные в форму оплаты*/
}


/*



                                            Первое задание ДЗ

  const getRequest = new Promise((resolve, reject) => {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr.responseText)
        }
    };
  
    xhr.open(
        'GET',
        'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
        true
    );
    xhr.send();
    })

    getRequest.then((res) => {
        console.log(res)
    })
*/