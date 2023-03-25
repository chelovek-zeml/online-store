import Button from "../../core/templates/button";

class ButtonBuyNow extends Button {

    constructor(id:string, className: string, name: string) {
        super(id, className, name);
        this.container.addEventListener("click", this.clickButton);
    }

    render() {
        return this.container;
    }

    clickButton() {
        document.getElementById("popup-pay")?.classList.remove("hide")
    }

}
export default ButtonBuyNow;