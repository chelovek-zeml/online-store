import './card_product.css';
import products from '../data.json';



export function card() {
  let result = '';
    
    for(let i = 0; i < products.length; i++) {
      let element = 
    `<div class='card__product'>
    <div class='card__img' style="background: url(${products[i].thumbnail}); background-size: cover;"></div>
    <div class='card__text'>
    <div class='card__info'><h5 class='info__name'>category: </h5><p>${products[i].category}</p></div>
    <div class='card__info'><h5 class='info__name'>brand: </h5><p>${products[i].brand}</p></div>
    <div class='card__info'><h5 class='info__name'>stock: </h5><p>${products[i].stock}</p></div>
    <div class='card__info'><h5 class='info__name'>description:</h5><p>${products[i].description}</p></div>
    <div class='card__info'><h5 class='info__name'>price: </h5><p>${products[i].price}</p></div>
    <div class='card__info'><h5 class='info__name'>rating: </h5><p>${products[i].rating}</p></div>
    </div>
    <div class='card__button'>
    <button>add to cart</button>
    <button>details</button>
    </div>
    </div>
    `;
result = result + element;
    }
    return result;
  }