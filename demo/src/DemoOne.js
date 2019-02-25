import React, { Component } from 'react';

class DemoOne extends Component {

	constructor(props){
		super(props);
		this.state = {
			name:"DemoOne"
		}
	}

	render() {
		let thiz = this;
	    return (
	      	<div>
		        <p style={{color:"red"}} onClick={function(){
		        	thiz.setState({
		        		name:"DemoOneClick"
		        	});
		        }}>{this.state.name}</p>
		    </div>
	    );
	}
}

export default DemoOne;
