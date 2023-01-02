abstract class Button {
  protected container: HTMLElement;

  constructor(id: string,className: string, name: string) {
    this.container = document.createElement('button');
    this.container.id = id;
    this.container.innerText = name;
    this.container.className = className;
  }

  render() {
    return this.container;
  }
}
export default Button;