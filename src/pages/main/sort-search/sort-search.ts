import './sort-search.css';
import { card } from '../card_product/card_product';

export function sortSearch() {
    let result = `<div class="sort_search">
    <div class="sort_product">sort</div>
    <div class="found_product">
    Found:
    <span class="found_count">20</span>
    </div>
    <div class="search_product">search</div>
    </div>`;
    return result + card();
}