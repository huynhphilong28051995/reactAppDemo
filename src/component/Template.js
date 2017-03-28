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
export default class DocumentTranslate extends React.Component {

   	render() {
   		console.log(this.props);
      	return (
	        <div id="document-translate-container">
	        	<Grid fluid>
	        		<Row>
	        			
	        		</Row>
        		</Grid>
	        </div>
      	);
   	}
}

