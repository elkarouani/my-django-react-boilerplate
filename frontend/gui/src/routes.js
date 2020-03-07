import React from 'react';
import { Route } from 'react-router-dom';

import CustomList from './containers/List';
import CustomDetail from './containers/Detail';

const BaseRouter = () => (
	<div>
		<Route exact path="/" component={CustomList} />
		<Route exact path="/:articleID" component={CustomDetail} />
	</div>
);

export default BaseRouter;
