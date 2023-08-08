import { fetchArticlesResponse } from '../Types/fetchArticlesResponse';

const API_KEY = '801db8fcadbf41f2a2c1dae35c6f0e6b';
const API_URL = 'https://newsapi.org/v2/top-headlines';

export const fetchArticles = async(country: string, pageSize: number) => {
  const url = `${API_URL}?country=${country}&pageSize=${pageSize}&apiKey=${API_KEY}`;
  
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
