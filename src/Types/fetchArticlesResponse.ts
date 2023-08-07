import { Article } from './Article';

export interface fetchArticlesResponse {
  status: string;
  totalResults: number;
  articles: Article[];
}
