import { FC } from 'react';

import { ArticleItem } from '../ArticleItem';

import { Article } from '../../Types/Article';

type Props = {
  articles: Article[];
  title: string;
}

export const ArticlesList: FC<Props> = ({ articles, title }) => (
  <section className='articles section' style={{ paddingTop: '24px' }}>
    <h1 className="title is-size-4-mobile is-size-3-desktop">
      {title}
    </h1>
    
    {articles.map((article) => (
      <ArticleItem key={article.url} article={article}/>
    ))}
  </section>
);
