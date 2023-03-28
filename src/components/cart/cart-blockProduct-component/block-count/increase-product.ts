import ButtonAddToCart from '../../../button/button-addToCart';

class IncreaseDeacreaseProduct {
  id!: string;
  protected container: HTMLElement;

  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
    this.container.addEventListener('click', this.click);
  }

  render(str: string) {
    this.container.innerText = `${str}`;
    return this.container;
  }

  click() {
    const sign = document.getElementById(`${this.id}`);
    let elementId = String(Number(this.id.replace(/[^0-9]/g, '')));
    if (sign?.textContent === '+') {
      IncreaseDeacreaseProduct.plus(elementId);
    } else {
      IncreaseDeacreaseProduct.minus(elementId);
    }
  }

  static plus(el: string) {
    let fieldCount = document.getElementById(`${el}_number_stock_product`);
    var arrProduct: {
      id: number;
      count: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }[] = JSON.parse(localStorage.getItem('arrProduct')!);
    for (let j = 0; j < arrProduct.length; j++) {
      if (Number(el) === arrProduct[j].id) {
        let temp = arrProduct[j].count;
        arrProduct[j].count = temp + 1;
        localStorage.setItem(`arrProduct`, `${JSON.stringify(arrProduct)}`);
        fieldCount!.textContent = `${arrProduct[j].count}`;
        IncreaseDeacreaseProduct.changeContextPrice(
          arrProduct[j].price,
          arrProduct[j].count,
          Number(el)
        );
        IncreaseDeacreaseProduct.changeContextPriceSymmary();
        IncreaseDeacreaseProduct.changeContextCountSummary();
        IncreaseDeacreaseProduct.changeContextCartHeader();
        IncreaseDeacreaseProduct.changeContextCountHeader();
      }
    }
  }

  static minus(el: string) {
    let fieldCount = document.getElementById(`${el}_number_stock_product`);
    var arrProduct: {
      id: number;
      count: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }[] = JSON.parse(localStorage.getItem('arrProduct')!);
    if (fieldCount?.textContent === '1') {
      let productDelet = document.getElementById(`p${el}`)!;
      productDelet.style.display = 'none';
      ButtonAddToCart.creatArrCart(Number(el), false);
      IncreaseDeacreaseProduct.changeContextPriceSymmary();
      IncreaseDeacreaseProduct.changeContextCountSummary();
      IncreaseDeacreaseProduct.changeContextCartHeader();
      IncreaseDeacreaseProduct.changeContextCountHeader();
    } else {
      for (let j = 0; j < arrProduct.length; j++) {
        if (Number(el) === arrProduct[j].id) {
          let temp = arrProduct[j].count;
          arrProduct[j].count = temp - 1;
          localStorage.setItem(`arrProduct`, `${JSON.stringify(arrProduct)}`);
          fieldCount!.textContent = `${arrProduct[j].count}`;
          IncreaseDeacreaseProduct.changeContextPrice(
            arrProduct[j].price,
            arrProduct[j].count,
            Number(el)
          );
          IncreaseDeacreaseProduct.changeContextPriceSymmary();
          IncreaseDeacreaseProduct.changeContextCountSummary();
          IncreaseDeacreaseProduct.changeContextCartHeader();
          IncreaseDeacreaseProduct.changeContextCountHeader();
        }
      }
    }
  }

  static changeContextPrice(i: number, count: number, id: number) {
    let fieldPrice = document.getElementById(`${id}_product_price`);
    fieldPrice!.textContent = `$ ${i * count}`;
  }

  static changeContextPriceSymmary() {
    var arrProduct: {
      id: number;
      count: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }[] = JSON.parse(localStorage.getItem('arrProduct')!);
    let res = 0;
    let fieldPriceSummary = document.getElementById(`id_price_summary`);
    for (let j = 0; j < arrProduct.length; j++) {
      res = res + arrProduct[j].price * arrProduct[j].count;
    }
    fieldPriceSummary!.textContent = `$ ${res}`;
  }

  static changeContextCountSummary() {
    var arrProduct: {
      id: number;
      count: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }[] = JSON.parse(localStorage.getItem('arrProduct')!);
    let res = 0;
    let fieldCountSummary = document.getElementById(`id_count_summary`);
    for (let j = 0; j < arrProduct.length; j++) {
      res = res + arrProduct[j].count;
    }
    fieldCountSummary!.textContent = `Products: ${res}`;
  }

  static changeContextCartHeader() {
    var arrProduct: {
      id: number;
      count: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }[] = JSON.parse(localStorage.getItem('arrProduct')!);
    let res = 0;
    let fieldCartHeader = document.getElementById(`count__cart`);
    for (let j = 0; j < arrProduct.length; j++) {
      res = res + arrProduct[j].count;
    }
    fieldCartHeader!.textContent = `${res}`;
  }

  static changeContextCountHeader() {
    var arrProduct: {
      id: number;
      count: number;
      title: string;
      description: string;
      price: number;
      discountPercentage: number;
      rating: number;
      stock: number;
      brand: string;
      category: string;
      thumbnail: string;
      images: string[];
    }[] = JSON.parse(localStorage.getItem('arrProduct')!);
    let res = 0;
    let fieldCountHeader = document.getElementById(`allPrice`);
    for (let j = 0; j < arrProduct.length; j++) {
      res = res + arrProduct[j].price * arrProduct[j].count;
    }
    fieldCountHeader!.textContent = `$ ${res}`;
  }
}
export default IncreaseDeacreaseProduct;
