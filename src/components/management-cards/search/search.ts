import Block from "../../../core/templates/block";
import './search.css';
import { SearchForm } from "./search-form";

export class Search extends Block {
    constructor() {
        super("search", "search__container");  
    }

    render() {
      this.container.append(new SearchForm().render());
        return this.container;
    }

    static oninputInfo()  {
      let input = document.querySelector("search-input") as HTMLElement;
          input.oninput = function(){
            console.log("hello");
          }
    }
}