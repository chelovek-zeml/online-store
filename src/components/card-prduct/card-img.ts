import products from '../../data.json';

class CardImg {
    protected container: HTMLElement;

    constructor(id: string, className: string) {
        this.container = document.createElement('div');
        this.container.className = className;
        this.container.id = id;
        
    }
    render(i:number) {
        this.container.style.background = `url(${products[i].thumbnail})`;
        this.container.style.backgroundSize = 'cover';
        return this.container;
      }
}
export default CardImg;