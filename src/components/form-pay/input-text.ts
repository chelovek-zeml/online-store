export class InputText {
    private element: HTMLElement;

    constructor(id: string, className:string, placeholder: string) {
        this.element = document.createElement("input");
        this.element.id = id;
        this.element.className = className;
        this.element.setAttribute("type", "text");
        this.element.setAttribute("placeholder", `${placeholder}`);
        this.element.setAttribute("autocomplete", "off")
    }

    render() {
        return this.element;
    }
}