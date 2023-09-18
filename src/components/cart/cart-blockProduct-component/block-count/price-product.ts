import products from '../../../../data.json';

class PriceProductItem {
  protected container: HTMLElement;
  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
  }

  render(i: number) {
    for (let j = 0; j < products.length; j++) {
      if (Number(products[j].id) === i) {
        this.container.innerText = `$ ${PriceProductItem.changePrice(i)}`;
      }
    }
    return this.container;
  }

  static changePrice(i: number) {
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
    let product;
    for(let j = 0; j < arrProduct.length; j++) {
      if((i) === arrProduct[j].id) {
        product = arrProduct[j];
      }
    }
    return product?.count! * product?.price!;
  }
}
export default PriceProductItem;