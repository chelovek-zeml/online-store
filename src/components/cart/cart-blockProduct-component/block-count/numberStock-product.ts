import products from '../../../../data.json';

class NumberStockProduct {
  protected container: HTMLElement;
  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
  }

  render(i:number) {
    let arrProduct: {
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
    for(let j = 0; j < arrProduct.length; j++) {
      if (arrProduct[j].id === i) {
        this.container.innerText = `${arrProduct[j].count}`;
      }
    }
    return this.container;
  }
}
export default NumberStockProduct;