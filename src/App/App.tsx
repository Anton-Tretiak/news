import { Routes, Route } from 'react-router-dom';

import { useArticleData } from '../Hooks/useArticleData';

import { MainPage, ListPage } from '../Pages';
import { Header, Footer } from '../Components';

import './App.scss';

export const App = () => {
  const {
    articles,
    category,
    selectedArticle,
    isModalVisible,
    isLoading,
    handleArticleClick,
    closeModal,
    handleCategoryChange,
    handleQueryChange,
  } = useArticleData();
  
  return (
    <div className="App">
      <Header />
      
      <Routes>
        <Route
          path="/news"
          element={
            <MainPage
              articles={articles}
              isLoading={isLoading}
              selectedArticle={selectedArticle}
              isModalVisible={isModalVisible}
              activeCategory={category}
              handleQueryChange={handleQueryChange}
              handleCategoryChange={handleCategoryChange}
              handleArticleClick={handleArticleClick}
              closeModal={closeModal}
            />
          }
        />
        
        <Route
          path="/list"
          element={
            <ListPage
              articles={articles}
              selectedArticle={selectedArticle}
              isModalVisible={isModalVisible}
              handleArticleClick={handleArticleClick}
              closeModal={closeModal}
            />
          }
        />
      </Routes>
      
      <Footer />
    </div>
  );
};
