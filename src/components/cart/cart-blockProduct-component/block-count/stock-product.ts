import products from '../../../../data.json';

class StockProduct {
  protected container: HTMLElement;
  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
  }

  render(i: number) {
    for (let j = 0; j < products.length; j++) {
      if (Number(products[j].id) === i + 1) {
        this.container.innerText = `Stock: ${products[j].stock}`;
      }
    }
    return this.container;
  }
}
export default StockProduct;
