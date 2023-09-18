import Block from '../../../../core/templates/block';
import IncreaseDeacreaseProduct from './increase-product';
import NumberStockProduct from './numberStock-product';

class BlockIncreaseDecreaseProduct extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }
  render(i:number) {
    this.container.append(
      new IncreaseDeacreaseProduct(
        `${i}_product_increase`,
        'increase__product'
      ).render('+')
    );
    this.container.append(
      new NumberStockProduct(
        `${i}_number_stock_product`,
        'number__stock__product'
      ).render(i)
    );
    this.container.append(
      new IncreaseDeacreaseProduct(
        `${i}_product_decrease`,
        'decrease__product'
      ).render('-')
    );
    return this.container;
  }
}
export default BlockIncreaseDecreaseProduct;
