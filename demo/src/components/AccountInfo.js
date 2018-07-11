
/**
 * name AccountInfo.js
 * desc 账户信息页面
 * author 李磊
 * date 2018.7.11
 */

import React, { Component } from 'react';
import {BrowserRouter,withRouter,Link,Route,Switch} from 'react-router-dom';
import One from './One'
import Two from './Two'
import Three from './Three'
import '../App.css';

class AccountInfo extends Component {
  render() {
    return (
      <div>
      	账户信息页面
      	<ul>
      		<li><Link to='/accountinfo/one'>页面1</Link></li>
      		<li><Link to='/accountinfo/two'>页面2</Link></li>
      		<li><Link to='/accountinfo/three'>页面3</Link></li>
      		<Route path='/accountinfo/one' component={One}></Route>
      		<Route path='/accountinfo/Two' component={Two}></Route>
      		<Route path='/accountinfo/Three' component={Three}></Route>
      	</ul>
      </div>
    );
  }
}

export default AccountInfo;
