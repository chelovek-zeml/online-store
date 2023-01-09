abstract class Block {
  protected container: HTMLElement;

  constructor(id: string, className: string, category?: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
    if (category) {
      this.container.dataset.category = category;
    }

  }

  render(i?: number, num?: number, str?: string) {
    return this.container;
  }
}
export default Block;
