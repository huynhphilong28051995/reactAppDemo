'use strict'

import React from 'react';

import {
	Grid,
	Row,
	Col,
} from 'react-bootstrap';

import {
	LeftPanel,
	RightPanel,
} from './widget';


import actions from '../../redux/actions';

export default class TwoPanelView extends React.Component {
   	handleBothNumChange(num) {
   		console.log('TwoPanelView_handleBothNumChange_DO NOTHING');
   	}

   	render() {
      	return (
	        <div id="three-panel-container">
	        	<Grid fluid>
	        		<Row>
	        			<Col sm={4}>
	        				<LeftPanel handleNumChange={::this.handleBothNumChange} />
	        			</Col>
	        			<Col sm={8}>
	        				<RightPanel handleNumChange={::this.handleBothNumChange} />
	        			</Col>
	        		</Row>
        		</Grid>
	        </div>
      	);
   	}
}