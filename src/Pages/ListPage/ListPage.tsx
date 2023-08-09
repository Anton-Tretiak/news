import { FC, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { ArticlesList, Pagination } from '../../Components';

import { Article } from '../../Types/Article';

import './ListPage.scss';

type Props = {
  articles: Article[];
};

export const ListPage: FC<Props> = ({ articles }) => {
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
