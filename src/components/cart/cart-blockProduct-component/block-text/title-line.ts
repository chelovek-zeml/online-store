import Block from '../../../../core/templates/block';

class TitleLine extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    return this.container;
  }
}
export default TitleLine;
