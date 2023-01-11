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

    const LS_categories = JSON.parse(localStorage.getItem('categories') || '[]');
    console.log(LS_categories);
    for (const card of document.querySelectorAll('.card__product')) {

      let show = true
      const category = (card as HTMLElement).dataset.category;

      if (LS_categories.length) {
        show = false
        if (LS_categories.includes(category)) show = true
      }


      card.setAttribute('style', `display:${show ? 'flex' : 'none'}`)
    }
  }

}
export default BlockProducts;