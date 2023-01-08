import './blockProducts.css';
import Block from '../../core/templates/block';
import Card from '../card-prduct/cardProduct';
import products from '../../data.json';

class BlockProducts extends Block {
   
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
      for(let i = 0; i < products.length; i++) {
        this.container.append((new Card(`${(i + 1) + 'a'}`, 'card__product')).render(i));
      }
    return this.container;
  }

}
export default BlockProducts;