import React, { FC, useState, memo, useCallback } from 'react';

import './InputField.scss';

type Props = {
  onQueryChange: (value: string) => void;
};

export const InputField: FC<Props> = memo(({ onQueryChange }) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }, []);
  
  const handleSearchClick = useCallback(() => {
    onQueryChange(inputValue);
    setInputValue('');
  }, [inputValue, onQueryChange]);
  
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
