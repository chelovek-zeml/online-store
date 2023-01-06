import Block from '../../core/templates/block';
import './blockCartSummary.css';
import CartBlockName from '../cart/cart-blockProduct-component/cart-blockName';
import ButtonBuyNow from '../button/button-buyNow';
import CountSummary from '../cart/cart-blockSummer-component/count-summary-cart';
import PriceSummary from '../cart/cart-blockSummer-component/price-summary-cart';

class BlockCartSummary extends Block {
  cartBlockName = new CartBlockName('id_summary_name', 'cart__summary__name');

  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    this.container.append(this.cartBlockName.render('Summary'));
    this.container.append((new CountSummary('id_count_summary','count__summary')).render());
    this.container.append((new PriceSummary('id_price_summary','price__summary')).render());
    this.container.append((new ButtonBuyNow('id_buy','buy__now','Buy Now')).render());
    return this.container;
  }
}
export default BlockCartSummary;