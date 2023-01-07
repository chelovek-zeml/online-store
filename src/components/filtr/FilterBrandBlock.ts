import Block from '../../core/templates/block';
import { FilterBlockItem } from './filter-category/filter-item-checkbox'
import products from '../../data.json';

const getBrandFromData = () => {
    const result = products.map(product => product.brand)
    return result;
}

export class FilterBrandBlock extends Block {
    brandWrapper
    brands
    brandItemsWrapper
    constructor(id: string, className: string) {
        super(id, className)
        this.brandWrapper = document.createElement('div')
        this.brandWrapper.className = 'category-brand'

        const title = document.createElement('div')
        title.className = 'category-brand_name'
        title.textContent = 'BRAND'

        this.brandItemsWrapper = document.createElement('div')
        this.brandItemsWrapper.className = 'category_choice'

        this.brands = [...new Set(getBrandFromData())]

        this.brandItemsWrapper.append(...this.brands.map((cat) => this.renderBrandItem(cat, cat, 1)))

        this.brandWrapper.append(title, this.brandItemsWrapper)
    }

    renderBrandItem(name: string, id: string, count: number) {
        return new FilterBlockItem(name, count, id).elementWrapper
    }

    render() {
        return this.brandWrapper
    }
}