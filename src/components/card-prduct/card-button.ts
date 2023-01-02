import './card-button.css';
import Block from '../../core/templates/block';
import ButtonAddToCart from '../button/button-addToCart';
import ButtonDetail from '../button/button-detail';
import products from '../../data.json';

class CardButton extends Block {
    buttonDetail = new ButtonDetail('id_btn_detail', 'btn_detail', 'Details');

    constructor(id: string, className: string) {
        super(id, className);
      }
    
      render(i:number): HTMLElement {
        const element = document.createElement('a');
        element.href = '#details-page';
        element.append(this.buttonDetail.render());
        this.container.append((new ButtonAddToCart(`${products[i].id}`, 'add__cart', 'Add to Cart')).render());
        this.container.append(element);
        return this.container;
      }
    }
    export default CardButton;