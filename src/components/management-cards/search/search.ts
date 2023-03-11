import Block from "../../../core/templates/block";
import './search.css';

export class Search extends Block {
    constructor() {
        super("search", "search__container");
        this.container.innerHTML = `
          <form class="search__bar">
            <input type="text" class="search__input" placeholder="Search..."/>
            <button type="submit" class="search__button">
             <img src='../src/assets/search.svg'>
            </button>
          </form> `;
    }

    render() {
        return this.container;
    }
}