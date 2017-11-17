import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';
import Home from './Home';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';

// render(<BrowserRouter  component={Home}>
//     <Route  path="/" component={Home} />
//     <Route path="/Home/Greeter" component={Greeter} />
// </BrowserRouter>,document.getElementById('root'));

// render(<Greeter AA={1}/>,document.getElementById('root'));
render(<Router>
    <div>
     <Route exact path="/" component={Home}/>
     <Route  path="/about" component={Home} />
     <Route path="/Greeter" component={Greeter} />
    </div>
</Router>,document.getElementById("root"));


