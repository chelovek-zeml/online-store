import Block from "../../../core/templates/block";

export class ViewBig extends Block {
  constructor() {
    super("view-big", "view__cards");
    this.container.addEventListener("click", this.click);
  }

  render() {
    for (let i = 0; i < 16; i++) {
      let point = document.createElement("div");
      point.className = "view__round_big";
      this.container.append(point);
    }
    return this.container;
  }

  click() {
    let arrayProduct = document.querySelector("#block-cards")?.children;
    for (let i = 0; i < arrayProduct!.length; i++) {
      let tempInfo = document.getElementById(`${i + 1}_card__info`);
      let tempCard = document.getElementById(`${i + 1}a`);
      let tempImg = document.getElementById(`${i + 1}card-img`);
      let tempTitle = document.getElementById(`${i + 1}card-title`);
      let tempButtonAddToCart = document.getElementById(`${i + 1}`);
      let tempButtonDetails = document.getElementById(`${i + 1}_btn_detail`);

      tempInfo!.style.display = "block";
      tempCard!.style.height = "300px";
      tempCard!.style.width = "200px";
      tempImg!.style.width = "180px";
      tempTitle!.style.fontSize = "1.6rem";
      tempButtonAddToCart!.style.width = "80px";
      tempButtonAddToCart!.style.height = "40px";
      tempButtonAddToCart!.style.fontSize = "1.3rem";
      tempButtonDetails!.style.width = "80px";
      tempButtonDetails!.style.height = "40px";
      tempButtonDetails!.style.fontSize = "1.3rem";
    }
  }
}
