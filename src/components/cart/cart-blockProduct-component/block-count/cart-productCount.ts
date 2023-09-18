import './cart-productCount.css';
import Block from '../../../../core/templates/block';
import StockProduct from './stock-product';
import BlockIncreaseDecreaseProduct from './increase-decrease-product';
import PriceProductItem from './price-product';

class CartProductCount extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }
  render(i: number) {
    this.container.append(
      new StockProduct(`${i}_product_stock`, 'product__stock').render(i)
    );
    this.container.append(
      new BlockIncreaseDecreaseProduct(
      `${i}_increase__decrease`,
        'increase__decrease'
      ).render(i)
    );
    this.container.append(
      new PriceProductItem(`${i}_product_price`, 'product__price').render(i)
    );
    return this.container;
  }
}
export default CartProductCount;
