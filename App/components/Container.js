import React, { Component } from "react";
import Tab from "./Tab";
import Content from "./Content";

import "../../www/css/container.css";

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          Key: "aaa",
          Title: "标题名称",
          Uri: "./../pages/About.js"
        }
      ]
    };
  }

  render() {
    return (
      <div className="main-content">
        <div className="main-content-inner">
          <div className="breadcrumbs ace-save-state" id="breadcrumbs">
            <ul className="nav nav-tabs" id="mainTabs">
              <li className="active">
                <a data-toggle="tab" href="#home">
                  <i className="green ace-icon fa fa-home bigger-120" />
                  工作台&nbsp;&nbsp;
                </a>
              </li>
              <li>
                <a data-toggle="tab" href="#messages">
                  Messages
                  <i className="ace-icon fa fa-times" />
                </a>
              </li>
              <Tab
                Key={this.state.items[0].Key}
                Title={this.state.items[0].Title}
              />
            </ul>
          </div>
          <div class="page-content">
            <div className="tab-content" id="mainContent">
              <div id="home" className="tab-pane fade in active">
                <p>
                  Raw denim you probably haven't heard of them jean shorts
                  Austin.
                </p>
              </div>
              <div id="messages" className="tab-pane fade">
                <p>
                  22222222222222Raw denim you probably haven't heard of them
                  jean shorts Austin.
                </p>
              </div>
              <Content
                Uri={this.state.items[0].Uri}
                Key={this.state.items[0].Key}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Container;
