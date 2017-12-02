import React from 'react';
import {render} from 'react-dom';
import Greeter from './components/Greeter';
import Home from './components/Home';
import Layout from './components/Layout'
import About from './pages/About'
import NavigationList from './pages/system/navigation/NavigationList';
import NavigationForm from './pages/system/navigation/NavigationForm';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

render(<Router>
    <div style={{height:'100%',overflow:'hidden'}} >
     <Route exact path="/" component={Layout}/>
     <Route  path="/about" component={Home} />
     <Route path="/Greeter" component={Greeter} />
     <Route path="/Home/About" component={About}/>
     <Route path="/System/Navigation/Index" component={NavigationList}/>
     <Route path="/System/Navigation/Form" component={NavigationForm}/>
    </div>
</Router>,document.body);