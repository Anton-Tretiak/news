import { FC } from 'react';

import { Dropdown } from '../Dropdown';
import { InputField } from '../InputField';

import './Filters.scss';

export const Filters: FC = () => (
  <section className='filters'>
    <div className='filters__container'>
      <Dropdown />
      
      <InputField />
    </div>
  </section>
);
