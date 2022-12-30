import Page from '../../core/templates/page';
import blockCards from './products/products';
import blockFilter from './filter/filter';

class MainPage extends Page {
  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.appendChild(blockFilter);
    this.container.appendChild(blockCards);
    return this.container;
  }
}

export default MainPage;
