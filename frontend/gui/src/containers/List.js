import React from 'react';

import { List } from 'antd';

import Article from '../components/Article';
import ArticleService from '../services/ArticleService';

class CustomList extends React.Component {
	state = {
		articles: []
	};

	componentDidMount() {
		const article_service = new ArticleService();

		article_service.GetArticles().then((response) => {
			this.setState({
				articles: response.data
			});
		});
	}

	render() {
		return (
			<List
				itemLayout="vertical"
				size="large"
				pagination={{
					onChange: (page) => {
						console.log(page);
					},
					pageSize: 3
				}}
				dataSource={this.state.articles}
				renderItem={(item) => <Article item={item} />}
			/>
		);
	}
}

export default CustomList;
