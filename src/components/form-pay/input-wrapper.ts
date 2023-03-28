export class InputWrapper {
    private wrapperInput: HTMLElement;

    constructor(id: string) {
        this.wrapperInput = document.createElement("div");
        this.wrapperInput.id = id;
        this.wrapperInput.className = "wrapper__input";
    }

    render() {
        return this.wrapperInput;
    }
}