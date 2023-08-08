import React, { FC } from 'react';

import { TopNews } from '../../Components/TopNews/TopNews';
import { ArticlesList } from '../../Components/ArticlesList';

import { Article } from '../../Types/Article';

import './MainPage.scss';

type Props = {
  articles: Article[];
};

export const MainPage: FC<Props> = ({ articles }) => {
  const splitIndex = 6;
  const topNews = articles.slice(0, splitIndex);
  const moreNews = articles.slice(splitIndex, splitIndex * 2);
  
  return (
    <section className='main-page'>
      <TopNews articles={topNews} />
      
      <ArticlesList title='More News' articles={moreNews} />
    </section>
  );
};
