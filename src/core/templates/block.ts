abstract class Block {
    protected container: HTMLElement;
  
    constructor(id: string, className: string) {
      this.container = document.createElement('div');
      this.container.id = id;
      this.container.className = className;
    }
  
    render(i?:number) {
      return this.container;
    }
  }
  export default Block;