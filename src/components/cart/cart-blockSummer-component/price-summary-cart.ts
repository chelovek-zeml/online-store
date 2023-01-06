class PriceSummary {
  protected container: HTMLElement;
  constructor(id: string, className: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
  }

  render() {
    let result: number = 0;
    let arrTemp = JSON.parse(localStorage.getItem('arrProduct')!);
    for (let i = 0; i < arrTemp.length; i++) {
      result += Number(arrTemp[i].price);
    }
    this.container.innerText = `$ ${result}`;
    return this.container;
  }
}
export default PriceSummary;
