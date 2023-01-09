import './blockProducts.css';
import Block from '../../core/templates/block';
import Card from '../card-prduct/cardProduct';
import products from '../../data.json';

class BlockProducts extends Block {

  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    for (let i = 0; i < products.length; i++) {
      this.container.append((new Card(`${(i + 1) + 'a'}`, 'card__product', products.find((p) => p.id === (i + 1))!.category)).render(i));
    }
    return this.container;
  }

  static filter(): void {
    for (const card of document.querySelectorAll('.card__product')) {
      let show = true;

      const category = (card as HTMLElement).dataset.category;

      card.setAttribute('style', `display:${show ? 'flex' : 'none'}`)
    }
  }

}
export default BlockProducts;