import React from 'react';
import { Form, Input, Button } from 'antd';

import ArticleService from '../services/ArticleService';

class CustomForm extends React.Component {
	constructor() {
		super();
		this.article_service = new ArticleService();
	}

	handleFormSubmit = (event, requestType, articleID) => {
		const title = event.target.elements.title.value;
		const content = event.target.elements.content.value;

		switch (requestType) {
			case 'post':
				this.article_service
					.CreateArticle(title, content)
					.then((response) => console.log(response))
					.catch((error) => console.error(error));
				window.location.reload();
				break;

			case 'put':
				this.article_service
					.UpdateArticle(title, content, articleID)
					.then((response) => console.log(response))
					.catch((error) => console.error(error));
				window.location.reload();
				break;

			default:
				break;
		}
	};

	render() {
		return (
			<div>
				<Form
					onSubmitCapture={(event) =>
						this.handleFormSubmit(event, this.props.requestType, this.props.articleID)}
				>
					<Form.Item label="Article Title">
						<Input name="title" placeholder="title" />
					</Form.Item>
					<Form.Item label="Article Content">
						<Input name="content" placeholder="content" />
					</Form.Item>
					<Form.Item>
						<Button type="primary" htmlType="submit">
							{this.props.btnActionText}
						</Button>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

export default CustomForm;
