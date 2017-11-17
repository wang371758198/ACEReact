import React, { Component } from "react";
import  '../../www/css/content.css';

class Content extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Key: props.Key,
      Uri: props.Uri
    };
  }

  componentDidMount(){
     
  }
  render() {
    return (
      <div id={this.state.Key} className="tab-pane fade">
       <iframe id={'iframe'+this.state.Key} src="/Greeter" style={{border:0}} width="100%"  />
      </div>
    );
  }
}

export default Content;
