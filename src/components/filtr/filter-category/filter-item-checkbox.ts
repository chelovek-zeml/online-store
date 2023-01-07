export class FilterBlockItem {
    elementWrapper
    checkbox
    constructor(name: string, count: number, id: string) {
        this.elementWrapper = document.createElement('div')
        const checkBoxId = id

        this.checkbox = document.createElement('input')


        this.checkbox.type = 'checkbox'
        this.checkbox.id = id

        const text = document.createElement('label')
        text.htmlFor = checkBoxId
        text.textContent = name

        const countElement = document.createElement('div')
        countElement.textContent = `(${count}/${count})`


        this.elementWrapper.append(this.checkbox, text, countElement)

        const onClick = (e: Event) => {
            const { checked } = e.target as HTMLInputElement
            sessionStorage.setItem(name, String(checked))

        }

        this.checkbox.addEventListener('click', onClick)
    }

    render() {
        return this.elementWrapper;
    }
}