import React, { Component } from "react";
import Tab from "./Tab";
import Content from "./Content";

import "../../www/css/container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Key: "aaaa",
      Title: "工作台",
      Uri: null
    };
  }

  render() {
    return (
      <div className="main-content">
        <div className="main-content-inner">
          <div className="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul className="nav nav-tabs" id="mainTabs">
              <li className="active">
                <a data-toggle="tab" href={"#" + this.state.Key}>
                  <i className="green ace-icon fa fa-home bigger-120" />
                  {this.state.Title}&nbsp;&nbsp;
                </a>
              </li>
            </ul>
          </div>
           1111111111
          <div className="tab-content" id="mainContent">
            <div id={this.state.Key} className="tab-pane fade in active">
              <iframe
                id={"iframe" + this.state.Key}
                src="/Greeter"
                style={{ border: 0 }}
                width="100%"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
