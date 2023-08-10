import React, { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';

import { TopNews, ArticlesList, Loader, Filters } from '../../Components';

import { Article } from '../../Types/Article';

import './MainPage.scss';

type Props = {
  articles: Article[];
  isLoading: boolean;
  selectedArticle: Article | null;
  isModalVisible: boolean;
  activeCategory: string;
  handleArticleClick: (article: Article) => void;
  handleCategoryChange: (selectedCategory: string) => void;
  handleQueryChange: (value: string) => void;
  closeModal: () => void;
};

export const MainPage: FC<Props> = memo(({
  articles,
  isLoading,
  selectedArticle,
  isModalVisible,
  handleArticleClick,
  activeCategory,
  closeModal,
  handleCategoryChange,
  handleQueryChange,
}) => {
  const splitIndex = 6;
  const topNews = articles.slice(0, splitIndex);
  const moreNews = articles.slice(splitIndex, splitIndex * 2);
  
  return (
    <section className='main-page'>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Filters
            activeCategory={activeCategory}
            onQueryChange={handleQueryChange}
            onCategoryChange={handleCategoryChange}
          />
          
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
});
