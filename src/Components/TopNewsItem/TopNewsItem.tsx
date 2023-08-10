import { FC } from 'react';

import { Article } from '../../Types/Article';

import defaultImage from '../../Assets/no-image.jpg';
import './TopNewsItem.scss';

type Props = {
  article: Article;
};

export const TopNewsItem: FC<Props> = ({ article }) => (
  <>
    <div
      className='top-news__item-image'
    >
      <img src={article.urlToImage || defaultImage} alt="Article Image" />
    </div>
    
    <h5 className='top-news__item-title is-size-6-mobile'>{article.title}</h5>
  </>
);
