import Block from '../../../../core/templates/block';
import RatingProduct from './rating-product';
import DiscountProduct from './discount-product';

class BlockRatingDiscount extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(i: number): HTMLElement {
    this.container.append(
      new RatingProduct('id_product_rating', 'product__rating').render(i)
    );
    this.container.append(
      new DiscountProduct('id_product_discount', 'product__discount').render(i)
    );

    return this.container;
  }
}
export default BlockRatingDiscount;
