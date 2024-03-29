import React, { FC, useState, useEffect } from 'react';

import { useArticleContext } from '../../Context/ArticleContext';

import { ArticlesList, Pagination } from '../../Components';

import './ListPage.scss';

export const ListPage: FC = () => {
  const { articles } = useArticleContext();
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
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
    <div className='list-page'>
      <ArticlesList title='More News' articles={displayedArticles} />
      
      <Pagination
        maxPages={maxPages}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};
