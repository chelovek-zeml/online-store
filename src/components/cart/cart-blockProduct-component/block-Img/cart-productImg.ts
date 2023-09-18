import Block from '../../../../core/templates/block';
import './cart-productImg.css';
import CardImg from '../../../card-prduct/card-img';

class CartProductImg extends Block {
  cartImg = new CardImg('card-img','card__img');

  constructor(id: string, className: string) {
    super(id, className);
  }

  render(i: number, num: number): HTMLElement {
    this.container.innerHTML = `<div>${num + 1}</div>`;
    this.container.append(this.cartImg.render(i));

    return this.container;
  }
}
export default CartProductImg;
