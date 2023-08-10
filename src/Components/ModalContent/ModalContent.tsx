import { FC } from 'react';

import { Modal } from '../Modal';

import { Article } from '../../Types/Article';

import defaultImage from '../../Assets/no-image.jpg';
import './ModalContent.scss';

type Props = {
  selectedArticle: Article;
  closeModal: () => void;
}

export const ModalContent: FC<Props> = ({ selectedArticle, closeModal }) => {
  return (
    <Modal onClose={closeModal}>
      <div className='box content'>
        <h3>{selectedArticle.title}</h3>
        
        <img
          className='modal-content-image'
          src={selectedArticle.urlToImage || defaultImage}
          alt="Article Image"
        />
        
        <p>{selectedArticle.content}</p>
        
        <div className='modal-content-footer'>
          <p>Author: {selectedArticle.author}</p>
          
          <p>
            <a href={selectedArticle.url} target='_blank'>Read more</a>
          </p>
        </div>
      </div>
    </Modal>
  );
};
