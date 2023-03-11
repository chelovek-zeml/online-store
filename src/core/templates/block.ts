abstract class Block {
  protected container: HTMLElement;

  constructor(id: string, className: string, category?: string, brand?: string, price?: string, rating?: string) {
    this.container = document.createElement('div');
    this.container.id = id;
    this.container.className = className;
    if (category) {
      this.container.dataset.category = category;
    }
    if (brand) {
      this.container.dataset.brand = brand;
    }
    if (price) {
      this.container.dataset.price = price;
    }
    if (rating) {
      this.container.dataset.rating = rating;
    }

  }

  render(i?: number, num?: number, str?: string) {
    return this.container;
  }
}
export default Block;
