export class CreditCardInputCvv {
    private element: HTMLElement;

    constructor(id: string, className:string) {
        this.element = document.createElement("input");
        this.element.id = id;
        this.element.className = className;
        this.element.setAttribute("type", "text");
        this.element.setAttribute("placeholder", `code`);
        this.element.setAttribute("maxlength", `3`);
        this.element.setAttribute("autocomplete", "off")
    }

    render() {
        return this.element;
    }
}