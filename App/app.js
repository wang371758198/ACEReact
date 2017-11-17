import React from 'react';
import {render} from 'react-dom';
import Greeter from './components/Greeter';
import Home from './components/Home';
import Layout from './components/Layout'
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

render(<Router>
    <div>
     <Route exact path="/" component={Layout}/>
     <Route  path="/about" component={Home} />
     <Route path="/Greeter" component={Greeter} />
    </div>
</Router>,document.body);