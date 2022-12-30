import './filter.css'
import { filterButton } from './filter-button/filter-button';

function blockFilter() {
    const element = document.createElement('div');
    // Lodash, currently included via a script, is required for this line to work
    element.className = 'block__filter';
    element.innerHTML = filterButton();
  
    return element;
  }

  export default blockFilter();
 