import React, { FC, memo } from 'react';

import { useArticleContext } from '../../Context/ArticleContext';

import { ArticleItem } from '../ArticleItem';
import { ModalContent } from '../ModalContent';

import { Article } from '../../Types/Article';

import './ArticlesList.scss';

type Props = {
  articles: Article[];
  title: string;
};

export const ArticlesList: FC<Props> = memo(({
  articles,
  title,
}) => {
  const {
    selectedArticle,
    isModalVisible,
    handleArticleClick,
  } = useArticleContext();
  
  return (
    <section className='articles section'>
      <h1 className="title is-size-4-mobile is-size-3-desktop">
        {title}
      </h1>
      
      {articles.map((article) => (
        <div
          key={article.url}
          className='articles__article-wrapper'
          onClick={() => handleArticleClick(article)}
        >
          <ArticleItem article={article} />
        </div>
      ))}
      
      {isModalVisible && selectedArticle && (
        <ModalContent />
      )}
    </section>
  );
});
