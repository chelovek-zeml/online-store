import './cardProduct.css';
import Block from '../../core/templates/block';
import CardImg from './card-img';
import BlockCardInfo from './card-info';
import CardButton from './card-button';


class Card extends Block {

  constructor(id: string, className: string, category: string, brand: string, price: string, rating: string) {
    super(id, className, category, brand, price, rating);
  }

  render(i: number): HTMLElement {
    this.container.append((new CardImg('card__img')).render(i));
    this.container.append((new BlockCardInfo('id_card__info', 'card__info')).render(i));
    this.container.append((new CardButton('id_card_button', 'card__button').render(i)));
    return this.container;
  }
}
export default Card;