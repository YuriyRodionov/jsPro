/*var int = 0; // Integer | Float | Double
var str = ''; // String | Char
var bool = false; // Boolean
var arr = []; // Array
var obj = {}; // Object 
var nin = null; // undefined | NaN 
var func = function(){}; // Function

function test(param = '') {
    var int = 1;
    console.log('test', int);
}

function test1(){
    var int = 2;
    console.log('test1', int);
}

console.log(some); // undefined

console.log('global', int);
test();
test('str');
console.log('global1', int);
test1();
console.log('global2', int);

var some = 100;


if(some === 100){
    let k = 10;
    if(k = 10){
        console.log(k);
    }
    k = 20;
    console.log(k);
}

function test3(){
    console.log('test3', k);
}

// test3();


const obj2 = {
    'key': 'value',
    'key1': 'value1'
};

console.log('old', obj2);

obj2.key = 'new value';
obj2.key2 = 'value';

console.log('new', obj2);


const {key: strVal, key1} = obj2;

console.log('key -> strVal', strVal);
console.log('key1', key1);

const arr1 = [1, 2, 3, 4];

const [a, b, , d] = arr1;
*/



const goods = [
    {title: 'Shirt',   price: 100, quantity: 10},
    {title: 'Shirt_1', price: 1000, quantity: 1},
    {title: 'Shirt_2', price: 10000, quantity: 0},
    {title: 'Shirt_3', el: "ab", quantity: 100},
    {name: 'Shirt_4', price: 500, quantity: 15},
    {title: 'Shirt_5', price: 800, quantity: 0},
    {title: 'Shirt_6', price: 9000, quantity: 2},
    {title: 'Shirt_7', price: 8900, quantity: 7}
];

const renderGoodsItem = ({title = "Element", price = 100}) => document.createElement("div").innerHTML = `<h3>${title}</h3><p>${price}</p>`; //сам удивился, но кажется все получилось=)


const renderItems = items => items.map(renderGoodsItem).join(""); // Было понятно, что map вернет массив, элементы которого будут разделяться запятыми. Поэтому нужно или не возвращать массив(попробовал на скорую руку forEach, но что-то было не так), или убирать запятые. Метод join, честно говоря, нашел уже с помощью гугла)

document.getElementById('catalog').innerHTML = renderItems(goods);