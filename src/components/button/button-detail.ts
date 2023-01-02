import Button from "../../core/templates/button";
import './button-detail.css';

class ButtonDetail extends Button {

    constructor(id:string, className: string, name: string) {
        super(id, className, name);
    }

    render() {
        return this.container;
    }

}
export default ButtonDetail;