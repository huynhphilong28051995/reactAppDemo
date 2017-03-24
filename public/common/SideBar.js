'use strict'

import React from 'react';

import {
	Link,
} from 'react-router';

export default class SideBar extends React.Component {
   	render() {
      	return (
      		<div>
      			<Link to="/threepanelview">Three Panel Page</Link>
      			<hr/>
      			<Link to="/twopanelview">Two Panel Page</Link>
               <hr/>
               <Link to="/reduxstoreview">Redux Store Page</Link>
      		</div>
      	);
   	}
}

