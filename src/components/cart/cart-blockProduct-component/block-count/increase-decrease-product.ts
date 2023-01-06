import Block from '../../../../core/templates/block';
import IncreaseDeacreaseProduct from './increase-product';
import NumberStockProduct from './numberStock-product';

class BlockIncreaseDecreaseProduct extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }
  render() {
    this.container.append(
      new IncreaseDeacreaseProduct(
        'id_increase_product',
        'increase__product'
      ).render('+')
    );
    this.container.append(
      new NumberStockProduct(
        'id_number_stock_product',
        'number__stock__product'
      ).render()
    );
    this.container.append(
      new IncreaseDeacreaseProduct(
        'id_decrease_product',
        'decrease__product'
      ).render('-')
    );
    return this.container;
  }
}
export default BlockIncreaseDecreaseProduct;
