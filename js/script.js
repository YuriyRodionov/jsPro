const aaa = document.getElementById("aaa")
const goal = document.querySelector(".fetured-items");
const cartDiv = document.querySelector('.cart__menu-block')
const price = document.getElementById('cartCent')
const countLength = document.getElementById('countLength')
const deleteEl = document.getElementById("remove")
const search = document.querySelector(".search__button")


let store = []
let cart = []
let count = 0
let find = ""


function countIn() {
  return count++
}

function renderBasket() {
    countLength.innerHTML = cart.length
    if (cart.length === 0) {
      cartDiv.innerHTML = `<h4>Корзина пуста</h4>`
    } else {
      cartDiv.innerHTML = cart.map((el) => cartHtml(el)).join('')
    }
  }

const product = ({id, img, title = "Clothing", Price = 100}) => `
    <div class="item">
        <img class="item__image" src=${img} alt="item-image">
        <div class="item__hover">
            <div>
                <img src="img/featured_cart.png" alt="cart">
                <p id="${id}">Add to Cart</p>
            </div>
        </div>
        <p class="item__title">${title}</p>
        <p class="item__price">$ ${Price}</p>
    </div>`;

const cartHtml = ({id, img, title = 'MANGO PEOPLE T-SHIRT', Price = 100}) => `
  <div class="cart__menu_items" id="${id}">
    <img src=${img} alt="carts" />
    <div class="cart__menu_items-content">
      <h2>${title}</h2>
      <span>S</span>
      <p>1 x $ ${Price}</p>
    </div>
    <button">
      <i class="fas fa-times-circle" id="${id}"></i>
    </button>
  </div>`

  fetch(
        'https://raw.githubusercontent.com/YuriyRodionov/ProfLayout/main/site/responses/products.json'
    )
  .then((response) => response.json())
  .then((json) => { store = json; renderHtml(json) })
  

const renderHtml = (prod) => (goal.innerHTML = render(prod).join(''))

const render = (prod) => prod.map((el) => product(el))

const summCart = () => cart.reduce((acc, el) => acc + el.Price, 0)

aaa.addEventListener('click', (e) => {
  const id = parseInt(e.target.getAttribute('id'))
  if (id) {
    cart.push({idCount: countIn(), ...store.find((el) => el.id === id)})
    renderBasket()
    price.innerHTML = summCart()
  }
})

cartDiv.addEventListener("click", (e) => {
    const id = parseInt(e.target.getAttribute('id'))
      if (id) {
      cart.splice(cart.find((el) => el.id === id), 1);
      renderBasket()
      price.innerHTML = summCart()
  }
})
renderBasket()

//поиск

search.addEventListener("click", () => {
  let text = document.querySelector(".search__input").value;
  const regexp = new RegExp(text, 'i');
  store = store.filter(el => el.test(el.title));
  renderHtml(store)
})



/*class Catalog {

    constructor(){
        this.store = [];

        this.getGoods()

    }

    getGoods() {
        fetch(
          'https://raw.githubusercontent.com/YuriyRodionov/ProfLayout/main/site/responses/products.json'
      )
    .then((response) => response.json())
    .then((json) => {this.store = json})
    .then((res) => {document.querySelector(".fetured-items").innerHTML = res.map((el) => this.product(el))})
        }

    product ({id, img, title = "Clothing", Price = 100}) {
          `<div class="item">
                <img class="item__image" src=${img} alt="item-image">
                <div class="item__hover">
                    <div>
                        <img src="img/featured_cart.png" alt="cart">
                        <p id="${id}">Add to Cart</p>
                    </div>
                </div>
                <p class="item__title">${title}</p>
                <p class="item__price">$ ${Price}</p>
            </div>`}
          

       //} 
}*/
