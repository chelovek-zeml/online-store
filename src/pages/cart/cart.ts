import Page from "../../core/templates/page";
import './cart.css';
import BlockCart from "../../components/blocks/blockCart";
import BlockCartSummary from "../../components/blocks/blockCartSummary";

class CartPage extends Page{ 
    blockCart = new BlockCart("id_cart__page", "cart__page");
    blockCartPrice = new BlockCartSummary("id_cart__price", "cart__price");

    constructor(id: string) {
        super(id);
    }
    
    render() {
        if (JSON.parse(localStorage.getItem('arrProduct')!).length > 0) {
        this.container.appendChild(this.blockCart.render());  
        this.container.appendChild(this.blockCartPrice.render());
        } else {
            this.container.innerText = 'CART EMPTY'
        }
        return this.container;
    }
}

export default CartPage;