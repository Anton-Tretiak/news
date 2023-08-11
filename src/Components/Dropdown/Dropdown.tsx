import React, { FC, useCallback } from 'react';

import { useArticleContext } from '../../Context/ArticleContext';

export const Dropdown: FC = () => {
  const { category, handleCategoryChange } = useArticleContext();
  
  const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];
  
  const handleCategorySelect = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      handleCategoryChange(e.target.value);
    },
    [handleCategoryChange],
  );
  
  return (
    <div className="field">
      <div className="control">
        <div className="select">
          <select
            value={category}
            onChange={handleCategorySelect}
          >
            <option value="">Top News</option>
            
            {categories.map((categoryItem) => (
              <option
                key={categoryItem}
                value={categoryItem}
              >
                {categoryItem}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};
