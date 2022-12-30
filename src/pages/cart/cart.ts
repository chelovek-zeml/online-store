import Page from "../../core/templates/page";
import blockCart from "./block-cart/block-cart";

class CartPage extends Page{ 

    constructor(id: string) {
        super(id);
    }
    
    render() {
        this.container.appendChild(blockCart);  
        return this.container;
    }
}

export default CartPage;