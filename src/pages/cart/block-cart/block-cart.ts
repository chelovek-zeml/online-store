import './blockCart.css';

function blockCart() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.className = 'block__cart';
    element.innerText = "CART";
    return element;
  }
  
  export default blockCart();