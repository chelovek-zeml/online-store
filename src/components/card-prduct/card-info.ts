import './card-info.css';
import Block from '../../core/templates/block';
import CardText from './card-text';

class BlockCardInfo extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(i: number): HTMLElement {
    this.container.append((new CardText('card__text')).render(i, 'category'));
    this.container.append((new CardText('card__text')).render(i, 'brand'));
    this.container.append((new CardText('card__text')).render(i, 'stock'));
    this.container.append((new CardText('card__text')).render(i, 'price'));
    this.container.append((new CardText('card__text')).render(i, 'rating'));
    return this.container;
  }
}
export default BlockCardInfo;
