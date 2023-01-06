import Block from '../../core/templates/block';
import './blockCart.css';
import CartBlockName from '../cart/cart-blockProduct-component/cart-blockName';
import CartBlockProduct from '../cart/cart-blockProduct-component/cart-blockProduct';

class BlockCart extends Block {
  cartBlockName = new CartBlockName('id_cart_name', 'cart_block_name');
  cartBlockProduct = new CartBlockProduct(
    'id_cart_product',
    'cart_block_product'
  );

  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    let arrTemp = JSON.parse(localStorage.getItem('arrProduct')!);
    this.container.append(this.cartBlockName.render('Products in Cart'));
    for (let i = 0; i < arrTemp.length; i++) {
      this.container.append(
        new CartBlockProduct(`${i + 1 + 'p'}`, 'cart_block_product').render(
          Number(arrTemp[i].id) - 1,
          i
        )
      );
    }

    return this.container;
  }
}
export default BlockCart;
