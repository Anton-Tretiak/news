import React, { FC, useState, useEffect } from 'react';

import { ArticlesList, Pagination } from '../../Components';

import { Article } from '../../Types/Article';

import './ListPage.scss';

type Props = {
  articles: Article[];
  selectedArticle: Article | null;
  isModalVisible: boolean;
  handleArticleClick: (article: Article) => void;
  closeModal: () => void;
};

export const ListPage: FC<Props> = ({
  articles,
  selectedArticle,
  isModalVisible,
  handleArticleClick,
  closeModal,
}) => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const maxPages = Math.ceil(articles.length / itemsPerPage);
  
  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);
  
  return (
    <div className='list-page' style={{ width: '80%' }}>
      <ArticlesList
        title='More News'
        articles={displayedArticles}
        selectedArticle={selectedArticle}
        isModalVisible={isModalVisible}
        onArticleClick={handleArticleClick}
        onCloseModal={closeModal}
      />
      
      <Pagination
        maxPages={maxPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
