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
	ResultPanel,
} from './widget';

export default class ThreePanelView extends React.Component {
   	// this is the state of the ThreePanelView component
   	// state is usually declares in constructure but we use this format thanks
   	// to babel-preset-stage-0  (look in package.json)
   	state = {
   		leftPanelNum: 0,
   		rightPanelNum: 0,
   	}


   	handleLeftPanelNumChange(num) {
   		console.log('ThreePanelView_handleLeftPanelNumChange: ',num);
   		// this is a function that is going to be executed when LeftPanel input field change
   		// BUT, note that this function is executed on the ThreePanelView component's level.
   		// Meaning it is going to change variables in ThreePanelView component, NOT in LeftPanel component
   		
   		// by doing below, we are telling the ThreePanelView component to UPDATE the variable leftPanelNum
   		// to the specifed value
   		this.setState ({
   			leftPanelNum: num,
   		});
   	}

   	handleRightPanelNumChange(num) {
   		console.log('ThreePanelView_handleRightPanelNumChange: ',num);
   		this.setState ({
   			rightPanelNum: num,
   		});
   	}

   	render() {
   		const leftNum = this.state.leftPanelNum;
   		const rightNum = this.state.rightPanelNum;

      	return (
	        <div id="three-panel-container">
	        	<Grid fluid>
               <Row>
                  How this program work ?
                  There are 3 panels: left, right and result.
                  These 3 panels are children of the parent component ThreeViewPanel.
                  LeftPanel has an input field.
                  RightPanel has an input field.
                  When these input fields are changed, the change is going to be communicated to ThreeViewPanel (the parent).
                  ThreeViewPanel is going to change its STATE accordingly.
                  ThreeViewPanel then pass variables in its STATE to ResultPanel to calculate the result.

                  When you attempt this example, please try to see the difference between State and Props
                  > variables in state can be changed with setState.
                  > variables in props (passed down from parent component) cannot be changed. READONLY
               </Row>
	        		<Row>
	        			<Col sm={4}>
	        				<LeftPanel handleNumChange={::this.handleLeftPanelNumChange} />
	        			</Col>
	        			<Col sm={8}>
	        				<RightPanel handleNumChange={::this.handleRightPanelNumChange} />
	        			</Col>
	        		</Row>
	        		<Row>
	        			<ResultPanel num1={leftNum} num2={rightNum}/>
	        		</Row>
	        	</Grid>
	        </div>
      	);
   	}
}