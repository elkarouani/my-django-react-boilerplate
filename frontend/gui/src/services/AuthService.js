import axios from 'axios';

export default class ArticleService {
	SignIn(username, password) {
		return axios.post('https://localhost:8000/rest-auth/login/', {
			username: username,
			password: password
		});
	}

	SignUp(username, email, password1, password2) {
		return axios.post('https://localhost:8000/rest-auth/registration/', {
			username: username,
			email: email,
			password1: password1,
			password2: password2
		});
	}
}
