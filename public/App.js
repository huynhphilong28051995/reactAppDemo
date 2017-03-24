'use strict'

import React from 'react';

import SideBar from './common/SideBar';

import Header from './common/Header';

import {
	Grid,
	Row,
	Col,
} from 'react-bootstrap';

const STYLES = {
	sidebar: {
		border: '1px solid black'
	},
	main: {
		border: '1px solid black'
	}
}

export default class App extends React.Component {
 	render() {
  	return (
    	<div>
    		<Header />
    		<Grid>
    			<Row>
    				<Col xs={3} style={STYLES.sidebar}>
    					<SideBar />
    				</Col>
    				<Col xs={9} style={STYLES.main}>
    					{this.props.children}
    				</Col>
    			</Row>
    		</Grid>
    	</div>
  	);
 	}
}

