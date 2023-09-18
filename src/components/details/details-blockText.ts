import Block from "../../core/templates/block";
import TitleProduct from "../cart/cart-blockProduct-component/block-text/title-product";
import DescriptionProduct from "../cart/cart-blockProduct-component/block-text/decription-product";
import TitleLine from "../cart/cart-blockProduct-component/block-text/title-line";
import DiscountProduct from "../cart/cart-blockProduct-component/block-text/discount-product";
import RatingProduct from "../cart/cart-blockProduct-component/block-text/rating-product";
import StockProduct from "./stock-details";
import BrandProduct from "./brand-details";
import PriceProduct from "./price-details";
import ButtonAddToCart from "../button/button-addToCart";

class DetailsText extends Block {
    constructor(id: string, className: string) {
      super(id, className);
    }

    render(i: number): HTMLElement {
      
        this.container.append((new TitleProduct('details_title', 'details__title')).render(i));
        this.container.append((new BrandProduct('brand_product', 'brand__product')).render(i));
        this.container.append((new DescriptionProduct('details_description', 'details__description')).render(i));
        this.container.append((new TitleLine('1_line_details', 'line__details')).render());
        this.container.append((new DiscountProduct('discount_product', 'discount__product')).render(i));
        this.container.append((new RatingProduct('rating_product', 'rating__product')).render(i));
        this.container.append((new StockProduct('stock_product', 'stock__product')).render(i));
        this.container.append((new PriceProduct('price_product', 'price__product')).render(i));
        

        return this.container;
      }
    }
    export default DetailsText;