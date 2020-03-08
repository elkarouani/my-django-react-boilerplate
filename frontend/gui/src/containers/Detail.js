import React from 'react';

import { Card, Button } from 'antd';

import ArticleService from '../services/ArticleService';
import CustomForm from '../components/Form';

class CustomDetail extends React.Component {
	state = {
		article: {},
		articleID: null
	};

	componentDidMount() {
		const articleID = this.props.match.params.articleID;
		const article_service = new ArticleService();

		article_service.GetArticle(articleID).then((response) => {
			this.setState({
				article: response.data,
				articleID: articleID
			});
		});
	}

	handleDelete(event, articleID) {
		event.preventDefault();
		const article_service = new ArticleService();

		article_service
			.DeleteArticle(articleID)
			.then((response) => {
				console.log(response);
				this.props.history.push(`/`);
			})
			.catch((error) => console.error(error));
	}

	render() {
		return (
			<div>
				<Card title={this.state.article.title}>
					<p>{this.state.article.content}</p>
				</Card>
				<Card title={`Update Article [${this.state.article.title}]`}>
					<CustomForm requestType="put" articleID={this.state.articleID} btnActionText="Update" />
					<Button
						htmlType="submit"
						type="danger"
						onClick={(event) => this.handleDelete(event, this.state.articleID)}
					>
						Delete
					</Button>
				</Card>
			</div>
		);
	}
}

export default CustomDetail;
