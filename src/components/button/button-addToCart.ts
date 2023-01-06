import Button from '../../core/templates/button';
import products from '../../data.json';

class ButtonAddToCart extends Button {
  id!: number;

  constructor(id: string, className: string, name: string) {
    super(id, className, name);
    this.container.addEventListener('click', this.click);
    let arrProduct: object[];
    if (localStorage.getItem('arrProduct') !== null) {
      arrProduct = JSON.parse(localStorage.getItem('arrProduct')!);
    } else {
     arrProduct = [];
      localStorage.setItem('arrProduct', `${JSON.stringify(arrProduct)}`);
    }
    
  }

  render() {
    return this.container;
  }

  click() {
    let textButton = document.getElementById(`${this.id}`);
    if (textButton?.textContent === 'Add to Cart') {
      ButtonAddToCart.creatArrCart(this.id, true);
      textButton.textContent = 'Drop from Cart';
    } else if (textButton?.textContent === 'Drop from Cart') {
      ButtonAddToCart.creatArrCart(this.id, false);
      textButton.textContent = 'Add to Cart';
    }
    ButtonAddToCart.countStock();
    ButtonAddToCart.countPrice();
  }

  static countStock() {
    let countCart = document.getElementById('count__cart')!;
    let count;
    if (localStorage.length === 0) {
      countCart.textContent = '0';
    } else {
    count = JSON.parse(localStorage.getItem('arrProduct')!).length;
    }
    return (countCart.textContent = count.toString());
  }

  static countPrice() {
    let priceFeild = document.getElementById('allPrice');
    let result:number = 0;
    let arrTemp = JSON.parse(localStorage.getItem('arrProduct')!);
    for(let i = 0; i < arrTemp.length; i++) {
      result += Number(arrTemp[i].price);
    }
    return (priceFeild!.textContent = result?.toString());
  }

  static creatArrCart(i: number, flag: boolean) {
    let arrProduct: {
      id: number;
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
    if (flag) {
      arrProduct.push(products[i - 1]);
      localStorage.setItem(`arrProduct`, `${JSON.stringify(arrProduct)}`);
    } else {
      const index = arrProduct.findIndex((n) => {
        return Number(n.id) === Number(i)});
      if (index !== -1) {
        arrProduct.splice(index, 1);
      }
      localStorage.setItem(`arrProduct`, `${JSON.stringify(arrProduct)}`);
    }
  }
}
export default ButtonAddToCart;
