import BlockCards from "../../blocks/block.Cards";
import { FoundCountCards } from "../../management-cards/count-found/found-cards";

export class FilterBlockItem {
    elementWrapper
    checkboxWrapper //
    checkbox
    constructor(name: string, count: number, id: string, flag: string) {
        this.elementWrapper = document.createElement('div')
        this.elementWrapper.className = 'filter__item-category-brand'
        const checkBoxId = id

        this.checkboxWrapper = document.createElement('div')//
        this.checkboxWrapper.className = 'filter__wrapper-checkbox';  //

        this.checkbox = document.createElement('input')

        this.checkbox.type = 'checkbox'
        this.checkbox.id = id
        this.checkbox.name = flag;

        const text = document.createElement('label')
        text.htmlFor = checkBoxId
        text.textContent = name

        const countElement = document.createElement('div')
        countElement.textContent = `(${count}/${count})`

        this.checkboxWrapper.append(this.checkbox, text)
        this.elementWrapper.append(this.checkboxWrapper, countElement)

        const onClick = (e: Event) => {
            const { checked } = e.target as HTMLInputElement
            let LS_categories = JSON.parse(localStorage.getItem('categories') || '[]');
            if (checked && flag === 'category') LS_categories.push(name);
            else LS_categories = LS_categories.filter((LS_cat: string) => LS_cat !== name)
            localStorage.setItem('categories', JSON.stringify(LS_categories))

            let LS_brands = JSON.parse(localStorage.getItem('brands') || '[]');
            if (checked && flag === 'brand') LS_brands.push(name);
            else LS_brands = LS_brands.filter((LS_brand: string) => LS_brand !== name)
            localStorage.setItem('brands', JSON.stringify(LS_brands))
            BlockCards.filter();
            FoundCountCards.countProduct();
        }

        this.checkbox.addEventListener('click', onClick)
    }

    render() {
        return this.elementWrapper;
    }
}