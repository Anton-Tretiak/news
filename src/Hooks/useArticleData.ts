import { useState, useEffect, useCallback } from 'react';
import { fetchArticles } from '../API/api';
import { Article } from '../Types/Article';

export const useArticleData = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [category, setCategory] = useState('');
  const [query, setQuery] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchData = useCallback(async() => {
    setIsLoading(true);
    
    try {
      const articlesData = await fetchArticles(category.toLowerCase(), query);
      
      setArticles(articlesData);
    } catch {
      throw new Error('Error while fetching data');
    } finally {
      setIsLoading(false);
    }
  }, [category, query]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  const handleArticleClick = useCallback((article: Article) => {
    setSelectedArticle(article);
    setIsModalVisible(true);
  }, []);
  
  const closeModal = useCallback(() => {
    setIsModalVisible(false);
  }, []);
  
  const handleCategoryChange = useCallback((selectedCategory: string) => {
    setCategory(selectedCategory);
  }, []);
  
  const handleQueryChange = useCallback((value: string) => {
    setQuery(value);
  }, []);
  
  return {
    articles,
    category,
    query,
    selectedArticle,
    isModalVisible,
    isLoading,
    handleArticleClick,
    closeModal,
    handleCategoryChange,
    handleQueryChange,
  };
};
