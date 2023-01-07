import Block from '../../core/templates/block';
import { FilterBlockItem } from './filter-category/filter-item-checkbox'
import products from '../../data.json';

const getCategoriesFromData = () => {
    const result = products.map(product => product.category)
    return result;
}

export class FilterCategoryBlock extends Block {
    categoryWrapper
    categories
    categoryItemsWrapper
    constructor(id: string, className: string) {
        super(id, className)
        this.categoryWrapper = document.createElement('div')
        this.categoryWrapper.className = 'category-brand'

        const title = document.createElement('div')
        title.className = 'category-brand_name'
        title.textContent = 'CATEGORY'

        this.categoryItemsWrapper = document.createElement('div')
        this.categoryItemsWrapper.className = 'category_choice'

        this.categories = [...new Set(getCategoriesFromData())]

        this.categoryItemsWrapper.append(...this.categories.map((cat) => this.renderCategoryItem(cat, cat, 1)))

        this.categoryWrapper.append(title, this.categoryItemsWrapper)
    }

    renderCategoryItem(name: string, id: string, count: number) {
        return new FilterBlockItem(name, count, id).elementWrapper
    }

    render() {
        return this.categoryWrapper
    }
}