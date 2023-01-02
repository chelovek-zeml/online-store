import './card-text.css';
import products from '../../data.json';

class CardText {
  protected container: HTMLElement;

  constructor(className: string) {
    this.container = document.createElement('div');
    this.container.className = className;
  }
  render(i: number, name: string) {
    this.container.innerHTML = this.creatInfoCard(i, name);
    return this.container;
  }

  creatInfoCard(i: number, name: string) {
    if (name === 'category') {
      return `<h4 class='info__name'>${name}: </h4><p>${products[i].category}</p>`;
    }
    if (name === 'brand') {
      return `<h4 class='info__name'>${name}: </h4><p>${products[i].brand}</p>`;
    }
    if (name === 'stock') {
      return `<h4 class='info__name'>${name}: </h4><p>${products[i].stock}</p>`;
    }
    if (name === 'price') {
      return `<h4 class='info__name'>${name}: </h4><p>${products[i].price}</p>`;
    }
    if (name === 'rating') {
      return `<h4 class='info__name'>${name}: </h4><p>${products[i].rating}</p>`;
    }
    return `<h4 class='info__name'>${name}: </h4><p> - </p>`;
  }
}
export default CardText;
