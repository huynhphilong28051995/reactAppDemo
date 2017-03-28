'use strict'

import React from 'react';

import { connect } from 'react-redux';

import {
	Grid,
	Row,
	Col,
	Button,
} from 'react-bootstrap';

import {
	FileUpload,
} from './widget';

import DropzoneComponent from 'react-dropzone-component';

import actions from '../../redux/actions';



@connect((state) => state)
export default class DocumentTranslatePage extends React.Component {
	handleFileUploadSuccess(type, file) {
	    console.log(file);
	}

	handleFileRemove(type, file) {
	    console.log('YEAH');
	}
	renderFileUpload(type) {
	    return (
	      	<FileUpload
	        	onSuccess={file => ::this.handleFileUploadSuccess(type, file)}
	        	onRemovedFile={file => ::this.handleFileRemove(type, file)}
	    	/>
	    );
	}
   	render() {
   		const componentConfig = {
		    iconFiletypes: ['.jpg', '.png', '.pdf'],
		    showFiletypeIcon: true,
		    postUrl: '/data/document/upload'
		};

		const djsConfig = {
		    addRemoveLinks: true,
		};
   		const eventHandlers = {};
      	
      	return (
	        <div id="document-translate-container">
	        	<Grid fluid>
	        		<Row>
	        			{this.renderFileUpload('original_document')}
	        		</Row>
        		</Grid>
	        </div>
      	);
   	}
}

