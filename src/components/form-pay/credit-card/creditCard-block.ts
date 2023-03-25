import Block from "../../../core/templates/block";
import { InputWrapper } from "../input-wrapper";
import { CreditCardInputCvv } from "./creditCard-input-cvv";
import { CreditCardInputDate } from "./creditCard-input-date";
import { CreditCardInputNumber } from "./creditCard-input-number";
import "./creditCardBlockInput.css";

export class CreditCardBlockInput extends Block {
    private titleCard: HTMLElement;
    private blockDateCvv: Block;

  constructor(id: string, className: string) {
    super(id, className);
    this.titleCard = document.createElement("p");
    this.titleCard.className = "title__credit_card";
    this.titleCard.innerText = "Credit card details";
    this.blockDateCvv = new Block("block-date-cvv", "block__date_cvv");
  }

  render() {
    this.container.append(this.titleCard);
    let creditNumber = new InputWrapper(`wrapper-input5`).render();
    let creditDate = new InputWrapper(`wrapper-input6`).render();
    let creditCvv = new InputWrapper(`wrapper-input7`).render();
    creditNumber.append(new CreditCardInputNumber("credit-number", "input__info").render());
    creditNumber.append(new Block("check-input5", "check__input").render());
    creditDate.append(new CreditCardInputDate("credit-date", "input__info").render());
    creditDate.append(new Block("check-input6", "check__input").render());
    creditCvv.append(new CreditCardInputCvv("credit-cvv", "input__info").render());
    creditCvv.append(new Block("check-input7", "check__input").render());
    this.blockDateCvv.render().append(creditDate);
    this.blockDateCvv.render().append(new Block("error-input6", "error__input").render());
    this.blockDateCvv.render().append(creditCvv);
    this.blockDateCvv.render().append(new Block("error-input7", "error__input").render());
    this.container.append(creditNumber);
    this.container.append(new Block("error-input5", "error__input").render());
    this.container.append(this.blockDateCvv.render());
    return this.container;
  }
}
