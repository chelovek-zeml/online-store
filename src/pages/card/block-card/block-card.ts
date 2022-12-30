import './blockCard.css';

function blockCard() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.className = 'block__card';
    element.innerText = "DETAILS";
    return element;
  }
  
  export default blockCard();