import Button from '../../core/templates/button';
import './button-addToCart.css';
import products from '../../data.json';

class ButtonAddToCart extends Button {
  id!: number;

  constructor(id: string, className: string, name: string) {
    super(id, className, name);
    this.container.addEventListener('click', this.click);
    let arrProduct: object[] = [];
    localStorage.setItem('arrProduct', `${JSON.stringify(arrProduct)}`);
  }

  render() {
    return this.container;
  }

  click() {
    let textButton = document.getElementById(`${this.id}`);

    if (textButton?.textContent === 'Add to Cart') {
      ButtonAddToCart.countStock(true);
      ButtonAddToCart.countPrice(this.id, true);
      ButtonAddToCart.creatArrCart(this.id, true);
      textButton.textContent = 'Drop from Cart';
    } else if (textButton?.textContent === 'Drop from Cart') {
      ButtonAddToCart.countStock(false);
      ButtonAddToCart.countPrice(this.id, false);
      ButtonAddToCart.creatArrCart(this.id, false);
      textButton.textContent = 'Add to Cart';
    }
  }

  static countStock(flag: boolean) {
    let countCart = document.getElementById('count__cart')!;
    let count = Number(countCart?.textContent);
    if (flag) {
      count++;
    } else {
      count--;
    }

    return (countCart.textContent = count.toString());
  }

  static countPrice(data: number, flag: boolean) {
    let price = document.getElementById('allPrice');
    let result = Number(price?.textContent);
    if (flag) {
      result! += Number(products[data - 1].price);
    } else {
      result! -= Number(products[data - 1].price);
    }

    return (price!.textContent = result?.toString());
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
