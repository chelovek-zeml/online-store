
class NumberStockProduct {
  protected container: HTMLElement;
  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
  }

  render() {
    let number = 1;
    this.container.innerText = `${number}`;
    return this.container;
  }
}
export default NumberStockProduct;