import Button from '../../core/templates/button';
import BlockDetails from '../blocks/blockDetails';

class ButtonDetail extends Button {
    id!: string;
    

  constructor(id: string, className: string, name: string) {
    super(id, className, name);
    this.container.addEventListener('click', this.click);
  }

  render() {
    return this.container;
  }

  click() {
    let numId = Number(this.id.replace(/[^0-9]/g,""));
    localStorage.setItem("idProduct", `${numId}`);
  }
}
export default ButtonDetail;
