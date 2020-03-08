import axios from 'axios';

export default class ArticleService {
	GetArticles() {
		return axios.get('http://localhost:8000/api/articles/');
	}

	GetArticle(article_id) {
		return axios.get(`http://localhost:8000/api/articles/${article_id}/`);
	}

	CreateArticle(title, content) {
		return axios.post('http://localhost:8000/api/articles/', {
			title: title,
			content: content
		});
	}

	UpdateArticle(title, content, id) {
		return axios.put(`http://localhost:8000/api/articles/${id}/`, {
			title: title,
			content: content
		});
	}

	DeleteArticle(id) {
		return axios.delete(`http://localhost:8000/api/articles/${id}/`);
	}
}
