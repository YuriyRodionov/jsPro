// Первое задание

let str = "И он сказал 'абракадабра' this aren't your item"
str = str.replace(/^'|(\s)'|'(\s)|'$/g, '"')

//Второе задание, по сути, описано в методичке

class GoodsList {
    constructor() {
        this.goods = [];
        this.filteredGoods = [];
    }
    
    fetchGoods(cb) {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
          this.goods = JSON.parse(goods);
          this.filteredGoods = JSON.parse(goods);
          cb();
        })
      }

    render() {
        let listHtml = '';
        this.filteredGoods.forEach(good => {
        const goodItem = new GoodsItem(good.product_name, good.price);
        listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }


    filterGoods(value) {
      const regexp = new RegExp(value, 'i');
      this.filteredGoods = this.goods.filter(good => regexp.test(good.product_name));
      this.render();
    }
  
  }
  
  searchButton.addEventListener('click', (e) => {
    const value = searchInput.value;
    list.filterGoods(value);
  });
  