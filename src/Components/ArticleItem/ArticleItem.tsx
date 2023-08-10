import { FC, useState } from 'react';

import { Article } from '../../Types/Article';

import defaultImage from '../../Assets/no-image.jpg';
import './ArticleItem.scss';

type Props = {
  article: Article;
};

export const ArticleItem: FC<Props> = ({ article }) => {
  const [imageSrc, setImageSrc] = useState(article.urlToImage || defaultImage);
  const publishedDate = new Date(article.publishedAt);
  const formattedTime = publishedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const formattedDate = publishedDate.toLocaleDateString([], { day: '2-digit', month: '2-digit' });
  
  const handleImageError = () => {
    setImageSrc(defaultImage);
  };
  
  return (
    <div className='article box content'>
      <div className='article__image'>
        <img
          src={imageSrc}
          alt="article image"
          onError={handleImageError}
        />
      </div>
      
      <div className='article__details'>
        <h5 className='article__title is-size-6-mobile'>
          {article.title}
        </h5>
        
        <span className='article__published is-size-7-mobile'>
          Published: {formattedTime}, {formattedDate}
        </span>
      </div>
    </div>
  );
};
