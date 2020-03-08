import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import './App.css';

import 'antd/dist/antd.css';

import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

import BaseRouter from './routes';
import CustomLayout from './containers/Layout';

class App extends React.Component {
	componentDidMount() {
		this.props.onTryAutoSignup();
	}

	render() {
		return (
			<div className="App">
				<Router>
					<CustomLayout {...this.props}>
						<BaseRouter />
					</CustomLayout>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.token !== null
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onTryAutoSignup: () => dispatch(actions.authCheckState())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
