import Block from "../../../core/templates/block";

export class ViewSmall extends Block {
  constructor() {
    super("view-small", "view__cards");
    this.container.addEventListener("click", this.click);
  }

  render() {
    for (let i = 0; i < 36; i++) {
      let point = document.createElement("div");
      point.className = "view__round_small";
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

      tempInfo!.style.display = "none";
      tempCard!.style.height = "180px";
      tempCard!.style.width = "150px";
      tempImg!.style.width = "100px";
      tempTitle!.style.fontSize = "1.3rem";
      tempButtonAddToCart!.style.width = "60px";
      tempButtonAddToCart!.style.height = "30px";
      tempButtonAddToCart!.style.fontSize = "1.0rem";
      tempButtonDetails!.style.width = "60px";
      tempButtonDetails!.style.height = "30px";
      tempButtonDetails!.style.fontSize = "1.0rem";
    }
  }
}
