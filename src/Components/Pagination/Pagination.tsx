import { FC } from 'react';
import cn from 'classnames';

import './Pagination.scss';

type Props = {
  maxPages: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

export const Pagination: FC<Props> = ({ maxPages, currentPage, onPageChange }) => {
  return (
    <nav className="pagination is-centered" role="navigation" aria-label="pagination">
      <ul className="pagination-list">
        {Array.from({ length: maxPages }).map((_, index) => (
          <li key={index}>
            <a
              className={cn('pagination-link', {
                'is-current': index + 1 === currentPage,
              })}
              aria-label={`Go to page ${index + 1}`}
              onClick={() => {
                onPageChange(index + 1);
                
                window.scrollTo(0, 0);
              }}
            >
              {index + 1}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
