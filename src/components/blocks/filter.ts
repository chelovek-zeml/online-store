import './filter.css'
import Block from '../../core/templates/block';
//import { filterButton } from './filter-button/filter-button';
import { FilterCategoryBlock } from '../filtr/FilterCategoryBlock';
import { FilterBrandBlock } from '../filtr/FilterBrandBlock';
import FilterButton from '../filtr/filter-button';

class BlockFilter extends Block {
  constructor(id: string, className: string) {
    super(id, className)

  }
  render() {
    this.container.append((new FilterButton('filter_button', 'filter__button').render()))
    this.container.append((new FilterCategoryBlock('filter_category', 'filter__category').render()))
    this.container.append((new FilterBrandBlock('filter_brand', 'filter__category').render()))

    return this.container;
  }

}

export default BlockFilter;
