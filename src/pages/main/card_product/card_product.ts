import './card_product.css';
import products from '../../../data.json';

export function card() {
  let result = '';

  for (let i = 0; i < products.length; i++) {
    let element = `<div class='card__product'>
    <div class='card__img' style="background: url(${products[i].thumbnail}); background-size: cover;"></div>
    <div class='card__text'>
    <div class='card__info'><h4 class='info__name'>category: </h4><p>${products[i].category}</p></div>
    <div class='card__info'><h4 class='info__name'>brand: </h4><p>${products[i].brand}</p></div>
    <div class='card__info'><h4 class='info__name'>stock: </h4><p>${products[i].stock}</p></div>
    <div class='card__info'><h4 class='info__name'>price: </h4><p>${products[i].price}</p></div>
    <div class='card__info'><h4 class='info__name'>rating: </h4><p>${products[i].rating}</p></div>
    </div>
    <div class='card__button'>
    <button>add to cart</button>
    <a href="#details-page"><button>details</button></a>
    </div>
    </div>
    `;
    result = result + element;
  }
  return result;
}
