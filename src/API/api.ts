import { fetchArticlesResponse } from '../Types/fetchArticlesResponse';

const API_KEY = '80ba48efb3be49f1b8007e777627d618';
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchArticles = async(category: string, query: string) => {
  let queryParam;
  let categoryParam;
  
  if (query.length > 0) {
    queryParam = `&q=${query}`;
  } else {
    queryParam = '';
  }
  
  if (category.length > 0) {
    categoryParam = `&category=${category}`;
  } else {
    categoryParam = '';
  }
  
  const url = `${API_URL}?country=us${queryParam}${categoryParam}&pageSize=36&apiKey=${API_KEY}`;
  
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    
    const data: fetchArticlesResponse = await response.json();
    
    return data.articles;
  } catch {
    throw new Error('Error while fetching data');
  }
};
