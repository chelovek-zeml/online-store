import Button from "../../core/templates/button";

class ButtonCopyLink extends Button {

    constructor(id: string, className: string, name: string) {
        super(id, className, name);
    }

    render() {
        return this.container;
    }
}


export default ButtonCopyLink;