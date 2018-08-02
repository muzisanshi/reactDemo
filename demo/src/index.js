import React from 'react';
import ReactDOM from 'react-dom';

// 引入公用样式
// Bootstrap 3.3.7
import "./lte/bower_components/bootstrap/dist/css/bootstrap.min.css"
// Font Awesome
import "./lte/bower_components/font-awesome/css/font-awesome.min.css"
// Ionicons
import "./lte/bower_components/Ionicons/css/ionicons.min.css"
// Theme style
import "./lte/dist/css/AdminLTE.min.css"
import "./lte/plugins/iCheck/square/blue.css"
// AdminLTE Skins. Choose a skin from the css/skins
// folder instead of downloading all of them to reduce the load.
import "./lte/dist/css/skins/_all-skins.min.css"
// Morris chart
import "./lte/bower_components/morris.js/morris.css"
// jvectormap
import "./lte/bower_components/jvectormap/jquery-jvectormap.css"
// Date Picker
import "./lte/bower_components/bootstrap-datepicker/dist/css/bootstrap-datepicker.min.css"
// Daterange picker
import "./lte/bower_components/bootstrap-daterangepicker/daterangepicker.css"
// bootstrap wysihtml5 - text editor
import "./lte/plugins/bootstrap-wysihtml5/bootstrap3-wysihtml5.min.css"

import './index.css';


// 引入公用js
import jQuery from 'jquery';

// Bootstrap 3.3.7
import "./lte/bower_components/bootstrap/dist/js/bootstrap.min.js"
// FastClick
import "./lte/bower_components/fastclick/lib/fastclick.js"
// // AdminLTE App

import "./lte/dist/js/adminlte.min.js"


import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
