import { FC } from 'react';

import { Dropdown } from '../Dropdown';
import { InputField } from '../InputField';

import './Filters.scss';

type Props = {
  activeCategory: string;
  onQueryChange: (value: string) => void;
  onCategoryChange: (selectedCategory: string) => void;
}

export const Filters: FC<Props> = ({ onCategoryChange, activeCategory, onQueryChange }) => {
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
  
  return (
    <section className='filters'>
      <div className='filters__container'>
        <Dropdown
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />
        
        <InputField onQueryChange={onQueryChange} />
      </div>
    </section>
  );
};
