import { SearchInput } from "./search-input";

export class SearchForm {
  protected container: HTMLElement;
  searchImg: HTMLElement = document.createElement("img");
  constructor() {
    this.container = document.createElement("form");
    this.container.className = "search__bar";
    this.container.id = "search-bar";
  }

  render() {
    this.searchImg.setAttribute("src", "assets/search.svg")
    this.container.append(
      new SearchInput("search-input", "search__input").render()
    );
    this.container.append(this.searchImg);
    return this.container;
  }
}
