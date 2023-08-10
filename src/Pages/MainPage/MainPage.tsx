import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import { TopNews, ArticlesList, Loader } from '../../Components';

import { Article } from '../../Types/Article';

import './MainPage.scss';

type Props = {
  articles: Article[];
  isLoading: boolean;
  selectedArticle: Article | null;
  isModalVisible: boolean;
  handleArticleClick: (article: Article) => void;
  closeModal: () => void;
};

export const MainPage: FC<Props> = (
  { articles,
    isLoading,
    selectedArticle,
    isModalVisible,
    handleArticleClick,
    closeModal },
) => {
  const splitIndex = 6;
  const topNews = articles.slice(0, splitIndex);
  const moreNews = articles.slice(splitIndex, splitIndex * 2);
  
  return (
    <section className='main-page'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <TopNews
            articles={topNews}
            selectedArticle={selectedArticle}
            isModalVisible={isModalVisible}
            onArticleClick={handleArticleClick}
            onCloseModal={closeModal}
          />
          
          <ArticlesList
            title='More News'
            articles={moreNews}
            selectedArticle={selectedArticle}
            isModalVisible={isModalVisible}
            onArticleClick={handleArticleClick}
            onCloseModal={closeModal}
          />
          
          <div className='main-page__button-wrapper'>
            <NavLink to='/list'>
              <button className='button is-black'>Browse more news</button>
            </NavLink>
          </div>
        </>
      )}
    </section>
  );
};
