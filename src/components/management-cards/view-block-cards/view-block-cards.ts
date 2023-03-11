import Block from "../../../core/templates/block";
import './view-block-cards.css';
import { ViewSmall } from "./view-small";
import { ViewBig } from "./view-big";

export class ViewBlockCards extends Block {
    constructor() {
        super("view-block-cards", "view__block_cards");
    }

    render() {
        this.container.append(new ViewSmall().render());
        this.container.append(new ViewBig().render());
        return this.container;
    }
}