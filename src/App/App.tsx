import { Routes, Route } from 'react-router-dom';

import { ArticleProvider } from '../Context/ArticleContext';

import { MainPage, ListPage } from '../Pages';
import { Header, Footer } from '../Components';

import './App.scss';

export const App = () => (
  <div className="App">
    <Header />
    
    <ArticleProvider>
      <Routes>
        <Route
          path="/news"
          element={
            <MainPage />
          }
        />
        
        <Route
          path="/list"
          element={
            <ListPage />
          }
        />
      </Routes>
    </ArticleProvider>
    
    <Footer />
  </div>
);
