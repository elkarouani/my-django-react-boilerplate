import axios from 'axios';

export default class ArticleService {
	GetArticles() {
		return axios.get('http://localhost:8000/api/articles/');
	}

	GetArticle(article_id) {
		return axios.get(`http://localhost:8000/api/articles/${article_id}/`);
	}
}
