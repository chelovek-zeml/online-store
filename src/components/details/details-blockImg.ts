import Block from "../../core/templates/block";
import CardImg from "../card-prduct/card-img";
import { DetailsBlockAddImg } from "./details-bkock-addImg";

class DetailsImg extends Block {
    constructor(id: string, className: string) {
      super(id, className);
    }

    render(i: number): HTMLElement {
        this.container.append((new CardImg('details-img', 'details__img')).render(i));
        this.container.append(new DetailsBlockAddImg("details-add-img", "details__add_img").render(i))
        return this.container;
      }
    }
    export default DetailsImg;
    