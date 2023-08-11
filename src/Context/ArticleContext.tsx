import React, {
  createContext,
  useContext,
  FC,
  ReactNode,
  useState,
  useCallback,
  useEffect,
} from 'react';

import { fetchArticles } from '../API/api';

import { Article } from '../Types/Article';

type ArticleContextType = {
  articles: Article[];
  selectedArticle: Article | null;
  category: string;
  isModalVisible: boolean;
  isLoading: boolean;
  handleArticleClick: (article: Article) => void;
  closeModal: () => void;
  handleCategoryChange: (selectedCategory: string) => void;
  handleQueryChange: (value: string) => void;
};

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: FC<{ children: ReactNode }> = ({ children }) => {
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
  
  return (
    <ArticleContext.Provider
      value={{
        articles,
        category,
        selectedArticle,
        isModalVisible,
        isLoading,
        handleArticleClick,
        closeModal,
        handleCategoryChange,
        handleQueryChange,
      }}
    >
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticleContext = () => {
  const context = useContext(ArticleContext);
  
  if (!context) {
    throw new Error('useArticleContext must be used within an ArticleProvider');
  }
  
  return context;
};
