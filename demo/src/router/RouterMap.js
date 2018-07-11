
import React from 'react'
import {BrowserRouter,withRouter,Link,Route,Switch} from 'react-router-dom';
import Main from '../components/Main'
import AccountInfo from '../components/AccountInfo'

class RouterMap extends React.Component {
	render() {  
        return (
        	<BrowserRouter>
        		<Switch>
	        		<Route exact path='/' component={Main}></Route>
	        		<Route path='/accountinfo' component={AccountInfo}></Route>
        		</Switch>
        	</BrowserRouter>
        )
    }
}

export default RouterMap;