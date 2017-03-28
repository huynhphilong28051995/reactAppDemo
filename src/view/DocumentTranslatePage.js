'use strict'

import React from 'react';

import { connect } from 'react-redux';

import {
	Grid,
	Row,
	Col,
	Button,
} from 'react-bootstrap';

import DropzoneComponent from 'react-dropzone-component';

import actions from '../../redux/actions';



@connect((state) => state)
export default class DocumentTranslatePage extends React.Component {
   	render() {
   		const componentConfig = {
		    iconFiletypes: ['.jpg', '.png', '.pdf'],
		    showFiletypeIcon: true,
		    postUrl: '/uploadHandler'
		};

		const djsConfig = {
		    addRemoveLinks: true,
		};
   		const eventHandlers = {};
      	
      	return (
	        <div id="document-translate-container">
	        	<Grid fluid>
	        		<Row>
	        			lalala
	        		</Row>
        		</Grid>
	        </div>
      	);
   	}
}

