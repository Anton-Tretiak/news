import { FC } from 'react';

import { TopNewsItem } from '../TopNewsItem';
import { ModalContent } from '../ModalContent';

import { Article } from '../../Types/Article';

import './TopNews.scss';

type Props = {
  articles: Article[];
  selectedArticle: Article | null;
  isModalVisible: boolean;
  onArticleClick: (article: Article) => void;
  onCloseModal: () => void;
};

export const TopNews: FC<Props> = (
  { articles,
    selectedArticle,
    isModalVisible,
    onArticleClick,
    onCloseModal },
) => {
  return (
    <section className='top-news section'>
      <h1 className='top-news__title title is-size-4-mobile is-size-3-desktop'>
        Top News
      </h1>
      
      <div className='top-news__articles columns is-multiline content box'>
        {articles.map((article) => (
          <div
            className='top-news__item column is-half-tablet is-one-third-desktop'
            key={article.url}
            onClick={() => onArticleClick(article)}
          >
            <TopNewsItem article={article} />
          </div>
        ))}
      </div>
      
      {isModalVisible && selectedArticle && (
        <ModalContent selectedArticle={selectedArticle} closeModal={onCloseModal} />
      )}
    </section>
  );
};
