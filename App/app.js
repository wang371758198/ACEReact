import React from 'react';
import {render} from 'react-dom';
import Greeter from './components/Greeter';
import Home from './components/Home';
import Layout from './components/Layout'
import About from './pages/About'

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

render(<Router>
    <div style={{height:'95%'}} >
     <Route exact path="/" component={Layout}/>
     <Route  path="/about" component={Home} />
     <Route path="/Greeter" component={Greeter} />
     <Route path="/Home/About" component={About}/>
    </div>
</Router>,document.body);