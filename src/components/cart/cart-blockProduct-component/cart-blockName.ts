import Block from "../../../core/templates/block";

class CartBlockName extends Block {
  private title: HTMLElement;
  private blockPagination: HTMLElement;
  private limitProduct: HTMLElement;
  private managerPagination: HTMLElement;
  private countLimitPagination: HTMLInputElement;
  private textLimitPagination: HTMLElement;
  private textManagerPagination: HTMLElement;
  private countPage: HTMLElement;
  private prev: HTMLElement;
  private next: HTMLElement;

  constructor(id: string, className: string) {
    super(id, className);
    let countLimit: number;
    let countPageCard: number;
    if (localStorage.getItem("countLimitCard") === null) {
      countLimit = 3;
      localStorage.setItem("countLimitCard", `${JSON.stringify(countLimit)}`);
    } else {
      countLimit = JSON.parse(localStorage.getItem("countLimitCard")!);
    }
    if (localStorage.getItem("countPageCart") === null) {
      countPageCard = 1;
      localStorage.setItem("countPageCart", `${JSON.stringify(countPageCard)}`);
    } else {
      countPageCard = JSON.parse(localStorage.getItem("countPageCart")!);
    }
    this.blockPagination = new Block(
      "block-cart-pagination",
      "block__cart_pagination"
    ).render();
    this.title = new Block("block-cart-title", "block__cart_title").render();
    this.limitProduct = new Block(
      "cart-limit-pagination",
      "cart__limit_pagination"
    ).render();
    this.managerPagination = new Block(
      "manager-pagination",
      "manager__pagination"
    ).render();
    this.textLimitPagination = new Block(
      "cart-limit-text",
      "cart__limit_text"
    ).render();
    this.textManagerPagination = new Block(
      "manager-text-pagination",
      "manager__text_pagination"
    ).render();
    this.countPage = new Block(
      "manager-count-pagination",
      "manager__count_pagination"
    ).render();
    this.countPage.innerText = `${countPageCard}`;
    this.prev = new Block(
      "manager-prev-pagination",
      "manager__prev_pagination"
    ).render();
    this.next = new Block(
      "manager-next-pagination",
      "manager__next_pagination"
    ).render();
    this.countLimitPagination = document.createElement("input");
    this.countLimitPagination.id = "count-limit-pagination";
    this.countLimitPagination.className = "count__limit_pagination";
    this.countLimitPagination.setAttribute("type", "number");
    this.countLimitPagination.setAttribute("autocomplete", "off");
    this.countLimitPagination.setAttribute("max", `10`);
    this.countLimitPagination.setAttribute("min", `3`);
    this.countLimitPagination.setAttribute("value", `${countLimit}`);
    this.prev.addEventListener("click", clickPrev);
    this.next.addEventListener("click", clickNext);
    this.countLimitPagination.addEventListener("input", inputLimit);
  }

  render(): HTMLElement {
    this.title.innerText = "Products in Cart";
    this.textLimitPagination.innerText = "Limit";
    this.textManagerPagination.innerText = "Page";

    this.limitProduct.append(this.textLimitPagination);
    this.limitProduct.append(this.countLimitPagination);

    this.managerPagination.append(this.textManagerPagination);
    this.managerPagination.append(this.prev);
    this.managerPagination.append(this.countPage);
    this.managerPagination.append(this.next);

    this.blockPagination.append(this.limitProduct);
    this.blockPagination.append(this.managerPagination);

    this.container.append(this.title);
    this.container.append(this.blockPagination);
    return this.container;
  }
}

function clickPrev() {
  let countElement = document.getElementById("manager-count-pagination");
  let count = Number(countElement?.textContent);
  count--;
  if (count < 1) {
    count = 1;
  }
  countElement!.innerText = `${count}`;
  localStorage.setItem("countPageCart", `${JSON.stringify(count)}`);
  renderCardToCart();
}

function clickNext() {
  let arrTemp = JSON.parse(localStorage.getItem("arrProduct")!);
  let countLimit = JSON.parse(localStorage.getItem("countLimitCard")!);
  let countElement = document.getElementById("manager-count-pagination");
  let count = Number(countElement?.textContent);
  let maxCount = Math.ceil(arrTemp.length / countLimit);
   count++;
  if (count > maxCount) {
    count = maxCount;
  }
  countElement!.innerText = `${count}`;
  localStorage.setItem("countPageCart", `${JSON.stringify(count)}`);
  renderCardToCart();
}

function inputLimit() {
  let countLimit = document.getElementById(
    "count-limit-pagination"
  ) as HTMLInputElement;
  let count = countLimit.value;
  localStorage.setItem("countLimitCard", `${count}`);
  renderCardToCart();
}

function renderCardToCart() {
  let arrTemp = JSON.parse(localStorage.getItem("arrProduct")!);
  let countLimit = JSON.parse(localStorage.getItem("countLimitCard")!);
  let countPageCard = JSON.parse(localStorage.getItem("countPageCart")!);
  let start = countLimit * (countPageCard - 1);
  let end = countLimit * countPageCard;

  for (let i = 0; i < arrTemp.length; i++) {
    let card = document.getElementById(`p${arrTemp[i].id}`);
    if (i < start || i >= end) {
    card!.style.display = "none";
    } else {
     card!.style.display = "flex";
    }
  }
}
export default CartBlockName;