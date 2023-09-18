import Block from "../../core/templates/block";
import ButtonAddToCart from "../button/button-addToCart";
import CardButton from "../card-prduct/card-button";
import ButtonBuyNow from "../button/button-buyNow";

export class DetailsButton extends Block {
    constructor(id: string, className: string) {
        super(id, className);
      }

      render(i:number): HTMLElement {
        let btnText = CardButton.checkConditionButton(i);
        this.container.append((new ButtonAddToCart(`${i}`, 'add__cart', `${btnText}`)).render());
        this.container.append(new ButtonBuyNow("buy-product", "buy__product", "Buy Now").render());
        return this.container;
      }
}