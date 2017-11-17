import React, {Component} from 'react';
import Head from './Head'
import Navigation from './Navigation'
import Container from './Container'

// import  '../css/layout.css';
import '../../www/css/layout.css'

class Layout extends Component{
    render(){
		return(
			<div>
				<Head />
				<div className="main-container ace-save-state" id="main-container">
					<Navigation />
					<Container/>
				</div>
			</div>
		);
    }
}
export default Layout;