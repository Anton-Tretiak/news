import { FC } from 'react';

import { Article } from '../../Types/Article';

type Props = {
  articles: Article[];
}

export const ArticlesList: FC<Props> = ({ articles }) => (
  <ul>
    {articles.map((article) => (
      <li key={article.url}>
        {article.title}
      </li>
    ))}
  </ul>
);
