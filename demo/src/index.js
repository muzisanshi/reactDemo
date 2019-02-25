
// 引入react框架
import React from 'react';
import ReactDOM from 'react-dom';









import registerServiceWorker from './registerServiceWorker';

import DemoOne from './DemoOne';
ReactDOM.render(<DemoOne name="fuck"/>, document.getElementById('root'));

// 注册资源缓存服务
registerServiceWorker();
