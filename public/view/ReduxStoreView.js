'use strict'

import React from 'react';

import { connect } from 'react-redux';

import {
	Grid,
	Row,
	Col,
	Button,
} from 'react-bootstrap';

import actions from '../../redux/actions';

@connect((state) => state)
export default class TwoPanelView extends React.Component {
   	handleIncreaseClick() {
   		this.props.dispatch(actions.increaseCount());
   	}

   	handleDecreaseClick() {
   		this.props.dispatch(actions.decreaseCount());
   	}

   	render() {
   		console.log(this.props);
      	return (
	        <div id="three-panel-container">
	        	<Grid fluid>
	        		<Row>
	        			<Col sm={8}>
	        				<h5>Click this button to trigger a redux-store change</h5>
	        				<Row>
	        					<Col sm={6}>
	        						<Button onClick={::this.handleIncreaseClick}>dispatch INCREASE</Button>
	        					</Col>
	        					<Col sm={6}>
	        						<Button onClick={::this.handleDecreaseClick}>dispatch DECREASE</Button>
	        					</Col>
	        				</Row>
	        			</Col>
	        			<Col sm={4}>
	        				<h5>This is the value of count variable in redux-store: {this.props.count.value}</h5>
	        			</Col>
	        		</Row>
        		</Grid>
	        </div>
      	);
   	}
}