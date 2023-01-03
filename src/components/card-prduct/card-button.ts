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
        let btnText = CardButton.checkConditionButton(i + 1);
        element.href = '#details-page';
        element.append(this.buttonDetail.render());
        this.container.append((new ButtonAddToCart(`${products[i].id}`, 'add__cart', `${btnText}`)).render());
        this.container.append(element);
        return this.container;
      }

      static checkConditionButton(i:number) {
        let arrTemp = JSON.parse(localStorage.getItem('arrProduct')!);
        let result = 'Add to Cart';
        if(arrTemp.length > 0) {
        for(let j = 0; j < arrTemp.length; j++) {
          if(i === Number(arrTemp[j].id)) { 
            result = 'Drop from Cart';
          }
        }
      }
        return result;
      }
    }
    export default CardButton;