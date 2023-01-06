
class IncreaseDeacreaseProduct {
  protected container: HTMLElement;
  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
  }

  render(str: string) {
   this.container.innerText = `${str}`
    return this.container;
  }
}
export default IncreaseDeacreaseProduct;