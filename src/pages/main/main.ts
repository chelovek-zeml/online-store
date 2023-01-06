import Page from '../../core/templates/page';
import blockFilter from './filter/filter';
import BlockProducts from '../../components/blocks/blockProducts';

class MainPage extends Page {
  blockProducts = new BlockProducts('id_block__product', 'block__product');

  constructor(id: string) {
    super(id);
  }

  render() {
    this.container.appendChild(blockFilter);
    this.container.append(this.blockProducts.render())
    return this.container;
  }
}

export default MainPage;
