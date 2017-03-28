'use strict'

import React from 'react';

import Header from './component/common/Header';

import {
	Grid,
	Row,
	Col,
} from 'react-bootstrap';

export default class App extends React.Component {
 	render() {
  	return (
    	<div>
    		<Header />
    		<Grid>
    			<Row>
                    <Col xs={12}>
    					{this.props.children}
    				</Col>
    			</Row>
    		</Grid>
    	</div>
  	);
 	}
}

