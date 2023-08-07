import React, { useState, useEffect } from 'react';

import { fetchArticles } from '../API/api';
import { Article } from '../Types/Article';

import { Header } from '../Components/Header';
import { ArticlesList } from '../Components/ArticlesList';

import './App.css';

export const App = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  
  const fetchData = async() => {
    try {
      const articlesData = await fetchArticles('us');
      
      setArticles(articlesData);
    } catch {
      throw new Error('Error while fetching data');
    }
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <div className="App">
      <Header />
      
      <ArticlesList articles={articles} />
    </div>
  );
};
