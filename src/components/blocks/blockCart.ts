import Block from "../../core/templates/block";
import "./blockCart.css";
import CartBlockName from "../cart/cart-blockProduct-component/cart-blockName";
import CartBlockProduct from "../cart/cart-blockProduct-component/cart-blockProduct";
import { PopupFormToPay } from "../form-pay/popup-form-to-pay";

class BlockCart extends Block {
  cartBlockName = new CartBlockName("id_cart_name", "cart_block_name");
  cartBlockProduct = new CartBlockProduct(
    "id_cart_product",
    "cart_block_product"
  );

  constructor(id: string, className: string) {
    super(id, className);
  }

  render(): HTMLElement {
    let arrTemp = JSON.parse(localStorage.getItem("arrProduct")!);
    let countLimit = JSON.parse(localStorage.getItem("countLimitCard")!);
    let countPageCard = JSON.parse(localStorage.getItem("countPageCart")!);
    let start = countLimit * (countPageCard - 1);
    let end = countLimit * countPageCard;
    this.container.append(this.cartBlockName.render());
    // arrTemp = arrTemp.slice(start, end);
    for (let i = 0; i < arrTemp.length; i++) {
      if (i < start || i >= end) {
        this.container.append(
          new CartBlockProduct(
            `p${arrTemp[i].id}`,
            "cart_block_product"
          ).render(Number(arrTemp[i].id), i, "none")
        );
      } else {
        this.container.append(
          new CartBlockProduct(
            `p${arrTemp[i].id}`,
            "cart_block_product"
          ).render(Number(arrTemp[i].id), i)
        );
      }
    }
    this.container.append(new PopupFormToPay().render());
    return this.container;
  }
}
export default BlockCart;
