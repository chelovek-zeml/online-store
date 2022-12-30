import './filter-button.css';
import { category } from '../filter-category/category';
import { brand } from '../filter-brand/brand';
import { filterPrice } from '../filter-price/filter-price';
import { filterStock } from '../filter-stock/filter';

export function filterButton() {
    let result = `<div class='filter_button'>
    <button class='filter_reset'>Reset Fiflter</button>
    <button class='filter_copylink'>Copy Link</button>
    </div>`;
    return result + category() + brand() + filterPrice() + filterStock();
}


