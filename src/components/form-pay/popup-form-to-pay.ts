import "./formToPay.css"
import { InputEmail } from "./input-email";
import { InputPhone } from "./input-phone";
import { InputSubmit } from "./input-submit";
import { InputText } from "./input-text";
import { InputWrapper } from "./input-wrapper";
import Block from "../../core/templates/block";
import { CreditCardBlockInput } from "./credit-card/creditCard-block";

export class PopupFormToPay {
    private element: HTMLElement;
    private form: HTMLElement;
    private titleForm: HTMLElement;
    private checkForm: HTMLElement;
    

    constructor() {
        this.element = document.createElement("div");
        this.element.id = "popup-pay";
        this.element.className = "popup__pay hide";
        this.form = document.createElement("form");
        this.form.id = "form-pay";
        this.form.className = "form__pay";
        this.form.setAttribute("novalidate", "");
        this.titleForm = document.createElement("p");
        this.titleForm.className = "title__form";
        this.titleForm.innerText = "Personal details";
        this.checkForm = document.createElement("p");
        this.checkForm.id = "check-form";
        this.checkForm.className = "check__form";

        window.onclick = function(e) {
            let temp = e.target as HTMLElement;
            
            if (temp.classList.contains("popup__pay")) {
                document.getElementById("popup-pay")?.classList.add("hide");
            }
        }
    }

    render() {
        this.form.append(this.titleForm);
        for(let i = 1; i < 5; i++) {
            let wrapper = new InputWrapper(`wrapper-input${i}`).render();
            if(i === 1) {
                wrapper.append(new InputText("input-name", "input__info", "Name").render());
                wrapper.append(new Block("check-input1", "check__input").render());
                this.form.append(wrapper);
                this.form.append(new Block("error-input1", "error__input").render());
            }
            if(i === 2) {
                wrapper.append(new InputPhone("input-phone", "input__info").render());
                wrapper.append(new Block("check-input2", "check__input").render());
                this.form.append(wrapper);
                this.form.append(new Block("error-input2", "error__input").render());
            }
            if(i === 3) {
                wrapper.append(new InputText("input-address", "input__info", "Address").render());
                wrapper.append(new Block("check-input3", "check__input").render());
                this.form.append(wrapper);
                this.form.append(new Block("error-input3", "error__input").render());
            }
            if(i === 4) {
                wrapper.append(new InputEmail("input-email", "input__info").render());
                wrapper.append(new Block("check-input4", "check__input").render());
                this.form.append(wrapper);
                this.form.append(new Block("error-input4", "error__input").render());
            }

        }
        this.form.append(new CreditCardBlockInput("wrapper-credit-card", "wrapper__credit_card").render())
        this.form.append(new InputSubmit().render());
        this.form.append(this.checkForm);
        this.element.append(this.form);
        return this.element;
    }
} 