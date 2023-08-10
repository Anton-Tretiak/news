import { FC, useState } from 'react';

import { ArticleItem } from '../ArticleItem';
import { ModalContent } from '../ModalContent';

import { Article } from '../../Types/Article';

import './ArticlesList.scss';

type Props = {
  articles: Article[];
  title: string;
  selectedArticle: Article | null;
  isModalVisible: boolean;
  onArticleClick: (article: Article) => void;
  onCloseModal: () => void;
}

export const ArticlesList: FC<Props> = (
  { articles,
    title,
    selectedArticle,
    isModalVisible,
    onArticleClick,
    onCloseModal },
) => {
  return (
    <section className='articles section'>
      <h1 className="title is-size-4-mobile is-size-3-desktop">
        {title}
      </h1>
      
      {articles.map((article) => (
        <div
          key={article.url}
          onClick={() => onArticleClick(article)}
          className='articles__article-wrapper'
        >
          <ArticleItem article={article} />
        </div>
      ))}
      
      {isModalVisible && selectedArticle && (
        <ModalContent selectedArticle={selectedArticle} closeModal={onCloseModal} />
      )}
    </section>
  );
};
