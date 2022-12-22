import './filter.css'

let main = document.querySelector('main');

function component() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = '<p class="filter__name">FILTER</p>';
    element.className = 'block__filter';
  
    return element;
  }
  
  main?.appendChild(component());