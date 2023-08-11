import React, { FC, useState, memo, useCallback } from 'react';

import { useArticleContext } from '../../Context/ArticleContext';

import './InputField.scss';

export const InputField: FC = memo(() => {
  const { handleQueryChange } = useArticleContext();
  
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);
  
  const handleSearchClick = useCallback(() => {
    handleQueryChange(inputValue);
    setInputValue('');
  }, [inputValue, handleQueryChange]);
  
  return (
    <div className='input__wrapper'>
      <input
        className="input"
        type="text"
        placeholder="Find news"
        value={inputValue}
        onChange={handleInputChange}
      />
      
      <button
        className='button is-dark'
        onClick={handleSearchClick}
      >
        Search
      </button>
    </div>
  );
});
