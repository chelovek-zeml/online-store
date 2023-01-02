import Block from '../../core/templates/block';
import './blockDetails.css';

class BlockDetails extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    return this.container;
  }
}
export default BlockDetails;
