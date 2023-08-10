import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header, Footer } from '../Components';
import { MainPage, ListPage } from '../Pages';

import { fetchArticles } from '../API/api';
import { Article } from '../Types/Article';

import './App.css';

export const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = async() => {
    try {
      setIsLoading(true);
      
      const articlesData = await fetchArticles('us');
      
      setArticles(articlesData);
    } catch {
      throw new Error('Error while fetching data');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalVisible(true);
  };
  
  const closeModal = () => {
    setIsModalVisible(false);
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route path='/' element={
            <MainPage
              articles={articles}
              isLoading={isLoading}
              selectedArticle={selectedArticle}
              isModalVisible={isModalVisible}
              handleArticleClick={handleArticleClick}
              closeModal={closeModal}
            />
          } />
          
          <Route path='/list' element={
            <ListPage
              articles={articles}
              selectedArticle={selectedArticle}
              isModalVisible={isModalVisible}
              handleArticleClick={handleArticleClick}
              closeModal={closeModal}
            />
          } />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
};
