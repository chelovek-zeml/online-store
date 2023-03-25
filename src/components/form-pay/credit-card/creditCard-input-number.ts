export class CreditCardInputNumber {
    private element: HTMLElement;

    constructor(id: string, className:string) {
        this.element = document.createElement("input");
        this.element.id = id;
        this.element.className = className;
        this.element.setAttribute("type", "text");
        this.element.setAttribute("placeholder", `number`);
        this.element.setAttribute("maxlength", `16`);
        this.element.setAttribute("autocomplete", "off")
    }

    render() {
        return this.element;
    }
}