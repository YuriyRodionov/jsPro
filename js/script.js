Vue.component("search", {
  template: `
  <label>
      <input type="text" v-model="searchLine" class="search__input" name="search" placeholder="Search for item...">
			<span class="search__button" v-on:click="filteredGoods"><i class="fas fa-search"></i></span>
	</label>
  `,
  data() {
    return {
      searchLine: '',
    }
  },
  methods: {
    filteredGoods() {
      this.$emit("search", this.searchLine);
  }
  }
});

/*Vue.component("catalog", {
  template: `
    <div class="fetured-items" id="aaa">
      <catalogitem v-for="(elem, i) in filteredGoods" :id="i" :title="elem.title" :price="elem.Price" :img="elem.img"></catalogitem>
		</div>
  `,
  props: ["filter"],
  data() {
    return {
      store: []
    }
  },
  computed: {
    filteredGoods() {
      return this.filter ? [...this.store.filter(({title}) => title.includes(this.filter))] : [...this.store];  
  }
  },
  methods: {
    
  },
  mounted() {
    fetch('/goods')
    .then((response) => response.json())
    .then((res) => this.store = res)
    }
});*/

/*Vue.component("catalogitem", {
  template: `
  <div class="item">
    <img class="item__image" :src="img" alt="item-image">
    <div class="item__hover">
      <div>
        <img src="img/featured_cart.png" alt="cart">
        <button :id="id" v-on:click="addToCart(id)">Add to Cart</button>
      </div>
    </div>
    <p class="item__title">{{ title }}</p>
    <p class="item__price">$ {{ price }}</p>
  </div>
  `,
  props: ["title", "price", "img", "id"],
  methods: {
    addToCart(id) {
      /*fetch("/addToCart", {
        method: 'post',
        body: JSON.stringify({}),
        headers: {
        'content-type': 'application/json'
    }
      })
      this.$emit("pluscart", id)
    }
  }
})*/

/*Vue.component("cart", {
  template: `
  <div class="cart">
    <label id="cartt">
      <input type="checkbox" name="cart" class="input">
      <img src="img/cart.png" alt="cart" />
      <span id="countLength">{{ cart.length }}</span>
      <div class="cart__menu">
        <div class="cart__menu-block">
        <!-- cartBasket -->
        
          <h4 v-if="cart.length === 0">Корзина пуста</h4>
          <div v-else class="cart__menu_items" v-for="el in cart">
              <div :id = "id">
            
              <img :src="img" alt="carts" />
              <div class="cart__menu_items-content">
                <h2>{{ el.title }}</h2>
                
                <p>1 x $ {{el.price}}</p>
              </div>
              <span v-on:click="deleteItem(id)">
                <i class="fas fa-times-circle"></i>
              </span>
            </div>
          </div>
       
      </div>
        <div class="cart__menu-cent">
          <h2>TOTAL</h2>
          <span class="cart__menu-price" id="cartCent">{{ summCart }}</span>
        </div>
        <button class="cart__menu-btn">Checkout</button>
        <button class="cart__menu-btn">Go to cart</button>
      </div>
    </label>
  </div>
  `,
  props: ["cart"],
  
  
  computed: {
    renderCart() {
      fetch('/cart')
    .then((response) => response.json())
    .then((res) => this.cart = res)
    },
    summCart() {
      return this.cart.reduce((acc, el) => acc + el.Price, 0)
    }
  },
  methods: {
    addToCart() {
      this.cart.push(this.element)
    }
  }
})*/

/*Vue.component("cart-item", {
  template: `
  <div :id = "id">
        
  <img :src="img" alt="carts" />
  <div class="cart__menu_items-content">
    <h2>{{ title }}</h2>
    
    <p>1 x $ {{price}}</p>
  </div>
  <span v-on:click="deleteItem(id)">
    <i class="fas fa-times-circle"></i>
  </span>
</div>
  `,
  props: ["title", "price", "img", "id"],
  methods: {
    deleteItem() {
      this.$emit("del", this.id)
    }
  }
})*/

const app = new Vue({
  el: "#app",
  data: {
    cart: [],
    store: [],
    searchInfo: ""
    
  },
  computed: {
    
    summCart() {
      return this.cart.reduce((acc, el) => acc + el.Price, 0)

    }
  },
  
  methods: {
    filteredGoods(search) {
      this.searchInfo = search;
      
      this.store = this.searchInfo ? this.store.filter(({title}) => title.includes(this.searchInfo)): this.store;
    },
    addCart(elem) {
     // this.cart = pluscart;
      //this.cart.push(id);
      /*const searchItem = this.cart.find((el) => {
        return el.id === pluscart.id
      })
      if (searchItem) searchItem.count++
      else this.cart.push(pluscart)*/
      
        fetch("/addToCart", {
          method: 'post',
          body: JSON.stringify(elem),
          headers: {
          'content-type': 'application/json'
      }
        }).then(fetch('/parampampam')
        .then((response) => response.json())
        .then((res) => this.cart = res))

    },
    deleteItem(id) {
      this.cart.splice(id, 1);
    }
    
  },
  mounted() {
    fetch('/goods')
  .then((response) => response.json())
  .then((res) => this.store = res)
  }
  
});


/*const aaa = document.getElementById("aaa")
const goal = document.querySelector(".fetured-items");
const cartDiv = document.querySelector('.cart__menu-block')
const price = document.getElementById('cartCent')
const countLength = document.getElementById('countLength')
const deleteEl = document.getElementById("remove")
const search = document.querySelector(".search__button")

const app = new Vue();
console.log(app);


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
