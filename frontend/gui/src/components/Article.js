import React from 'react';

import { List, Avatar } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';

const IconText = ({ icon, text }) => (
	<span>
		{React.createElement(icon, { style: { marginRight: 8 } })}
		{text}
	</span>
);

const Article = (props) => (
	<List.Item
		key={props.item.title}
		actions={[
			<IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
			<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
			<IconText icon={MessageOutlined} text="2" key="list-vertical-message" />
		]}
		extra={<img width={272} alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />}
	>
		<List.Item.Meta
			avatar={<Avatar src={props.item.avatar} />}
			title={<a href={`/${props.item.id}`}>{props.item.title}</a>}
			description={props.item.description}
		/>
		{props.item.content}
	</List.Item>
);

export default Article;
