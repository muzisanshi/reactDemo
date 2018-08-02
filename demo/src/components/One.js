
/**
 * name One.js
 * desc 页面1
 * author 李磊
 * date 2018.7.11
 */

import React, { Component } from 'react';
import {BrowserRouter,withRouter,Link,Route,Switch} from 'react-router-dom';
import '../App.css';

class One extends Component {

  	constructor(props){
  		super(props);
  		this.click = this.click.bind(this);
  		this.change = this.change.bind(this);

  		// this.click.bind(this);
  		// this.change.bind(this);

  		this.state = {
  			state1:"state1"
  		};
  	}

  	click(e){
  		this.setState({
  			state1:"state1111111"
  		});
  	}

  	change(e){
  		this.setState({
  			state1:"fuck"
  		});
  	}

	render() {
	    return (
	      <div>
	        <p>{this.state.state1}</p>
	        <button onClick={this.click}>改变</button>
	        <input
	            id="new-todo"
	            onChange={this.change}
	            value={this.state.state1}
	        />
	      </div>
	    );
	}
}

export default One;
