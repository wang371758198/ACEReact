import React, { Component } from "react";
import { render } from "react-dom";
import $ from "jquery";

class Tab extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Key: props.Key,
      Title: props.Title
    };
    this.tabClose = this.tabClose.bind(this);
  }

  tabClose(event) {
    //this.setState({isShow:false})
    var curNode = this.refs[this.state.Key];
   var curConent =$(curNode).find('a').attr('href').replace('#','');
   var preConent =$(curNode).prev().find('a').attr('href').replace('#','');
    $(curNode).prev().addClass('active');
    var content=$('#mainContent').children();
   
    content.each(function(e){
      if($(this).attr('id')== preConent){
        $(this).addClass('in active');
      }
    });
    curNode.remove();
    
    $('#'+curConent,'#mainContent').remove();
    //var preNode = $(thisNode)
    // $('#mainTabs').children().first()
  }

  render() {
    return (
      <li ref={this.state.Key}>
        <a data-toggle="tab" href={'#'+this.state.Key}>
          {this.state.Title}
          <i className="ace-icon fa fa-times" onClick={this.tabClose} />
        </a>
      </li>
    );
  }
}

export default Tab;
