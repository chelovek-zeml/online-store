import './cart-productText.css';
import Block from '../../../../core/templates/block';
import TitleProduct from './title-product';
import TitleLine from './title-line';
import DescriptionProduct from './decription-product';
import BlockRatingDiscount from './rating-discount-product';

class CartProductText extends Block {
  constructor(id: string, className: string) {
    super(id, className);
  }

  render(i: number): HTMLElement {
    this.container.append(
      new TitleProduct('id_product_title', 'product__title').render(i)
    );
    this.container.append(
      new TitleLine('id_title_line', 'title__line').render()
    );
    this.container.append(
      new DescriptionProduct('id_description', 'product__description').render(i)
    );
    this.container.append(
      new BlockRatingDiscount('id_rating_discount', 'rating__discount').render(
        i
      )
    );

    return this.container;
  }
}
export default CartProductText;
