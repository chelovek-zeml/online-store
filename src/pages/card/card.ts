import Page from "../../core/templates/page";
import blockCard from "./block-card/block-card";

class CardPage extends Page{ 

    constructor(id: string) {
        super(id);
    }
    
    render() {
        this.container.appendChild(blockCard);  
        return this.container;
    }
}

export default CardPage;