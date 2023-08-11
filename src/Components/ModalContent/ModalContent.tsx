import { FC } from 'react';

import { useArticleContext } from '../../Context/ArticleContext';

import { Modal } from '../Modal';

import defaultImage from '../../Assets/no-image.jpg';
import './ModalContent.scss';

export const ModalContent: FC = () => {
  const { selectedArticle, closeModal } = useArticleContext();
  
  return (
    <Modal onClose={closeModal}>
      <div className='box content'>
        <h3>{selectedArticle?.title}</h3>
        
        <img
          className='modal-content-image'
          src={selectedArticle?.urlToImage || defaultImage}
          alt="Article Image"
        />
        
        <p>{selectedArticle?.content}</p>
        
        <div className='modal-content-footer'>
          <p>Author: {selectedArticle?.author}</p>
          
          <p>
            <a href={selectedArticle?.url} target='_blank'>Read more</a>
          </p>
        </div>
      </div>
    </Modal>
  );
};
