import './products.css'
import {card} from '../card_product/card_product';

let main = document.querySelector('main');

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.className = 'block__product';
      element.innerHTML = card();
    return element;
  }
  
  main?.appendChild(component());