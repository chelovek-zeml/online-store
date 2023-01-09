import Block from '../../core/templates/block';
import './blockDetails.css';
import DetailsImg from '../details/details-blockImg';
import DetailsText from '../details/details-blockText';


class BlockDetails extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    let idElem = JSON.parse(localStorage.getItem('idProduct')!);
    this.container.append((new DetailsImg('details_block_img', 'details__block__img')).render(idElem - 1));
    this.container.append((new DetailsText('details_block_text', 'details__block__text')).render(idElem - 1));
    
    return this.container;
  }
}
export default BlockDetails;
