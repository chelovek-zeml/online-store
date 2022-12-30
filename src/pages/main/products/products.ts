import './products.css';
import { sortSearch } from '../sort-search/sort-search';

function blockCards() {
  const element = document.createElement('div');
  // Lodash, currently included via a script, is required for this line to work
  element.className = 'block__product';
  element.innerHTML = sortSearch();
  return element;
}

export default blockCards();
