import BlockProducts from "../../blocks/blockProducts"


export class FilterBlockItem {
    elementWrapper
    checkboxWrapper //
    checkbox
    constructor(name: string, count: number, id: string) {
        this.elementWrapper = document.createElement('div')
        this.elementWrapper.className = 'filter__item-category-brand'
        const checkBoxId = id

        this.checkboxWrapper = document.createElement('div')//
        this.checkboxWrapper.className = 'filter__wrapper-checkbox';  //

        this.checkbox = document.createElement('input')

        this.checkbox.type = 'checkbox'
        this.checkbox.id = id

        const text = document.createElement('label')
        text.htmlFor = checkBoxId
        text.textContent = name

        const countElement = document.createElement('div')
        countElement.textContent = `(${count}/${count})`

        this.checkboxWrapper.append(this.checkbox, text)
        this.elementWrapper.append(this.checkboxWrapper, countElement)


        const onClick = (e: Event) => {
            const { checked } = e.target as HTMLInputElement
            localStorage.setItem(name, String(checked))
            BlockProducts.filter();
        }

        this.checkbox.addEventListener('click', onClick)
    }

    render() {
        return this.elementWrapper;
    }
}