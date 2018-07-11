
/**
 * name Main.js
 * desc 主界面
 * author 李磊
 * date 2018.7.11
 */

import React, { Component } from 'react';
import {BrowserRouter,withRouter,Link,Route,Switch} from 'react-router-dom';
import '../App.css';

class Main extends Component {
  render() {
    return (
      <div>
        <p>主页面</p>
        <ul>
          <li>
            <Link to='/accountinfo'>账户信息</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Main;
