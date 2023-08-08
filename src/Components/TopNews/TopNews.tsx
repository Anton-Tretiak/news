import { FC } from 'react';

import { Article } from '../../Types/Article';

import defaultImage from '../../Assets/no-image.jpg';
import './TopNews.scss';

type Props = {
  articles: Article[];
};

export const TopNews: FC<Props> = ({ articles }) => {
  return (
    <section className='top-news section'>
      <h1 className='top-news__title title is-size-4-mobile is-size-3-desktop'>
        Top News
      </h1>
      
      <div className='top-news__articles columns is-multiline content box'>
        {articles.map((article) => (
          <div
            key={article.url}
            className='top-news__article column is-half-tablet is-one-third-desktop'
          >
            <div
              className='top-news__article-image'
              style={{ backgroundImage: `url(${article.urlToImage || defaultImage})` }}
            ></div>
            
            <h5 className='top-news__article-title is-size-6-mobile'>{article.title}</h5>
          </div>
        ))}
      </div>
    </section>
  );
};
