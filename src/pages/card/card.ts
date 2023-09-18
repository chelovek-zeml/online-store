import Page from "../../core/templates/page";
import BlockDetails from "../../components/blocks/blockDetails";

class CardPage extends Page{ 
    blockDetails = new BlockDetails("details", 'product__details');

    constructor(id: string) {
        super(id);
    }
    
    render() {
        this.container.append(this.blockDetails.render());  
        return this.container;
    }
}

export default CardPage;