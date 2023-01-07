import Block from '../../core/templates/block';
import ButtonResetFilter from '../button/button-resetFilter';
import ButtonCopyLink from '../button/button-copyLink';



/*export function filterButton() {
    let result = `<div class='filter_button'>
    <button class='filter_reset'>Reset Fiflter</button>
    <button class='filter_copylink'>Copy Link</button>
    </div>`;
    //return result + category() + brand() + filterPrice() + filterStock();
}*/


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
