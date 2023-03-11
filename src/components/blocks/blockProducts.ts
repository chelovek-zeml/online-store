import './blockProducts.css';
import Block from '../../core/templates/block';
import { ManagementCards } from '../management-cards/managementCards'; 
import BlockCards from './block.Cards';

class BlockProducts extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    this.container.append((new ManagementCards('management', 'management__cards').render()));
    this.container.append(new BlockCards('block-cards', 'block__cards').render());
    return this.container;
  }
}
export default BlockProducts;
