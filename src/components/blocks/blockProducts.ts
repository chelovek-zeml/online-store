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
      this.container.append(
        new Card(
          `${i + 1 + 'a'}`,
          'card__product',
          products.find((p) => p.id === i + 1)!.category,
          products.find((p) => p.id === i + 1)!.brand
        ).render(i)
      );
    }
    return this.container;
  }

  static filter(): void {
    const LS_categories = JSON.parse(
      localStorage.getItem('categories') || '[]'
    );
    const LS_brands = JSON.parse(localStorage.getItem('brands') || '[]');
    for (const card of document.querySelectorAll('.card__product')) {
      let show = true;
      const category = (card as HTMLElement).dataset.category;
      const brand = (card as HTMLElement).dataset.brand;

      if (LS_categories.length || LS_brands.length) {
        show = false;
      } 
      if ((LS_categories.includes(category) && !LS_brands.length) || (LS_brands.includes(brand) && !LS_categories.length)) {
        show = true;
      } else if (LS_categories.includes(category)) {
        if(LS_brands.includes(brand)) {
          show = true;
        }
      }
      card.setAttribute('style', `display:${show ? 'flex' : 'none'}`);
    }
  }
}
export default BlockProducts;
