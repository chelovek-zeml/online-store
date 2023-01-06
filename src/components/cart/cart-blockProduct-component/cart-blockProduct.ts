import Block from '../../../core/templates/block';
import CartProductImg from './block-Img/cart-productImg';
import CartProductText from './block-text/cart-productText';
import CartProductCount from './block-count/cart-productCount';

class CartBlockProduct extends Block {
  productImg = new CartProductImg('id_cart_img', 'cart__img');
  cartText = new CartProductText('id_cart_text', 'cart__text');
  cartCount = new CartProductCount('id_cart_count', 'cart__count');

  constructor(id: string, className: string) {
    super(id, className);
  }

  render(i: number, num: number): HTMLElement {
    this.container.append(this.productImg.render(i, num));
    this.container.append(this.cartText.render(i));
    this.container.append(this.cartCount.render(i));

    return this.container;
  }
}
export default CartBlockProduct;
