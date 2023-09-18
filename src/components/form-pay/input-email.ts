export class InputEmail {
    private element: HTMLElement;

    constructor(id: string, className:string) {
        this.element = document.createElement("input");
        this.element.id = id;
        this.element.className = className;
        this.element.setAttribute("type", "email");
        this.element.setAttribute("placeholder", `E-mail`);
        this.element.setAttribute("autocomplete", "off")
    }

    render() {
        return this.element;
    }
}