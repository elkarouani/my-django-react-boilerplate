import React from 'react';

import { Card } from 'antd';

import ArticleService from '../services/ArticleService';

class CustomDetail extends React.Component {
	state = {
		article: {}
	};

	componentDidMount() {
		const article_service = new ArticleService();
		const articleID = this.props.match.params.articleID;

		article_service.GetArticle(articleID).then((response) => {
			this.setState({
				article: response.data
			});
		});
	}

	render() {
		return (
			<Card title={this.state.article.title}>
				<p>{this.state.article.content}</p>
			</Card>
		);
	}
}

export default CustomDetail;
