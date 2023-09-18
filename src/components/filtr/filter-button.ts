import Block from '../../core/templates/block';
import ButtonResetFilter from '../button/button-resetFilter';
import ButtonCopyLink from '../button/button-copyLink';


class FilterButton extends Block {
    constructor(id: string, className: string) {
        super(id, className)
    }

    render() {
        this.container.append((new ButtonResetFilter('button_reset_filter', 'button__filter', 'Reset Fiflter').render()))
        this.container.append((new ButtonCopyLink('button_copy_link', 'button__filter', 'Copy Link').render()))
        return this.container;
    }

}


export default FilterButton;
