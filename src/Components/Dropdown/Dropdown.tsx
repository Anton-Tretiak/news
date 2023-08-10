import React, { FC, useCallback } from 'react';

type Props = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (selectedCategory: string) => void;
}

export const Dropdown: FC<Props> = ({ categories, onCategoryChange, activeCategory }) => {
  const handleCategorySelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      onCategoryChange(e.target.value);
    },
    [onCategoryChange],
  );
  
  return (
    <div className="field">
      <div className="control">
        <div className="select">
          <select
            value={activeCategory}
            onChange={handleCategorySelect}
          >
            <option value="">Top News</option>
            
            {categories.map((category) => (
              <option
                key={category}
                value={category}
              >
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
