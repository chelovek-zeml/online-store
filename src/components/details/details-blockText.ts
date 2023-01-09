import Block from "../../core/templates/block";
import TitleProduct from "../cart/cart-blockProduct-component/block-text/title-product";
import DescriptionProduct from "../cart/cart-blockProduct-component/block-text/decription-product";

class DetailsText extends Block {
    constructor(id: string, className: string) {
      super(id, className);
    }

    render(i: number): HTMLElement {
        this.container.append((new TitleProduct('details_title', 'details__title')).render(i));
        this.container.append((new DescriptionProduct('details_description', 'details__description')).render(i));

        return this.container;
      }
    }
    export default DetailsText;