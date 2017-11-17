import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import Greeter from './Greeter';

class Home extends Component{

    HandlerClick(){
        location.href="/Greeter?a=aa";
    }

    getJson(){
       
    }
    render(){
        return(<div> <h1>Home Page!!!120!!!!!!</h1>
        <button onClick={this.HandlerClick.bind(this)}>Greeter</button>  
        <button onClick={this.getJson.bind(this)}>请求数据</button> 
        </div>);
    }
}

export default Home;