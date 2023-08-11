import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { useArticleContext } from '../../Context/ArticleContext';

import { TopNews, ArticlesList, Loader, Filters } from '../../Components';

import './MainPage.scss';

export const MainPage: FC = memo(() => {
  const { articles, isLoading } = useArticleContext();
  
  const splitIndex = 6;
  const topNews = articles.slice(0, splitIndex);
  const moreNews = articles.slice(splitIndex, splitIndex * 2);
  
  return (
    <section className='main-page'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filters />
          
          <TopNews articles={topNews} />
          
          <ArticlesList title='More News' articles={moreNews} />
          
          <div className='main-page__button-wrapper'>
            <NavLink to='/list'>
              <button className='button is-black'>
                Browse more news
              </button>
            </NavLink>
          </div>
        </>
      )}
    </section>
  );
});
