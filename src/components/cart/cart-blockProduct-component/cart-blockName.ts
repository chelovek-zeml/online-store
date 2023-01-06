import Block from '../../../core/templates/block';

class CartBlockName extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(str: string | number | undefined): HTMLElement {
    this.container.innerText = `${str}`;
    return this.container;
  }
}
export default CartBlockName;
