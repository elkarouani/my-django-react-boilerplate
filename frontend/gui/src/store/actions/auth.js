import * as actionTypes from './actionTypes';

import AuthService from '../../services/AuthService';

const auth_service = new AuthService();

export const authStart = () => {
	return {
		type: actionTypes.AUTH_START
	};
};

export const authSuccess = (token) => {
	return {
		type: actionTypes.AUTH_SUCCESS,
		token: token
	};
};

export const authFail = (error) => {
	return {
		type: actionTypes.AUTH_FAIL,
		error: error
	};
};

export const authSignOut = () => {
	localStorage.removeItem('token');
	localStorage.removeItem('expirationDate');
	return {
		type: actionTypes.AUTH_LOGOUT
	};
};

export const checkAuthTimeout = (expirationDate) => {
	return (dispatch) => {
		setTimeout(() => {
			dispatch(authSignOut());
		}, expirationDate * 1000);
	};
};

export const authSignIn = (username, password) => {
	return (dispatch) => {
		dispatch(authStart());
		auth_service
			.SignIn(username, password)
			.then((response) => {
				const token = response.data.key;
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

				localStorage.setItem('token', token);
				localStorage.setItem('expirationDate', expirationDate);

				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch((error) => {
				dispatch(authFail(error));
			});
	};
};

export const authSignUp = (username, email, password1, password2) => {
	return (dispatch) => {
		dispatch(authStart());
		auth_service
			.SignUp(username, email, password1, password2)
			.then((response) => {
				const token = response.data.key;
				const expirationDate = new Date(new Date().getTime() + 3600 * 1000);

				localStorage.setItem('token', token);
				localStorage.setItem('expirationDate', expirationDate);

				dispatch(authSuccess(token));
				dispatch(checkAuthTimeout(3600));
			})
			.catch((error) => {
				dispatch(authFail(error));
			});
	};
};
