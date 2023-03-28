import Block from '../../core/templates/block';
import './blockDetails.css';
import DetailsImg from '../details/details-blockImg';
import DetailsText from '../details/details-blockText';
import { DetailsButton } from '../details/details-button';
import { PopupFormToPay } from '../form-pay/popup-form-to-pay';


class BlockDetails extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    let idElem = JSON.parse(localStorage.getItem('idProduct')!);
    let blockTextButton = document.createElement("div");
    blockTextButton.className = "block__text_button";
    blockTextButton.id = "block-text-button";
    blockTextButton.append((new DetailsText('details_block_text', 'details__block__text')).render(idElem - 1));
    blockTextButton.append(new DetailsButton("details-button", "details__button").render(idElem));
    this.container.append((new DetailsImg('details_block_img', 'details__block__img')).render(idElem - 1));
    this.container.append(blockTextButton);
    this.container.append(new PopupFormToPay().render())
    
    return this.container;
  }
}
export default BlockDetails;
