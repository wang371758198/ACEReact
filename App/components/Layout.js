import React, { Component } from "react";
import Head from "./Head";
import Navigation from "./Navigation";
import $ from "jquery";

// import  '../css/layout.css';
import "../../www/css/layout.css";

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Key: "aaa",
      Title: "工作台",
      Uri: "/Greeter"
    };
    this.openTab = this.openTab.bind(this);
    this.tabClose = this.tabClose.bind(this);
  }

  tabClose() {
    alert("关闭");
  }

  openTab(options) {
	var  Key="about";
	var  Title="Abouaaaaaaaaaaat";
	var  Uri="/Home/About";
    // this.setState({
    // 	Title:"About",
    // 	Key:"about",
    // 	Uri:"/Home/About"
    // });
	var mainTabs = $("#mainTabs");
	var isExist =false;
	var existNode=null;
	mainTabs.children().each(function(){
		var key=$(this).find('a').attr('href').replace('#','');
		if(key == Key){
			isExist=true;
			existNode=$(this);
		}
	});
    var tab = `<li class="active">
					<a data-toggle="tab" href="#${Key}">
          <i class="green ace-icon fa fa-home bigger-120" />
          <span>${Title}</span>
          <i class="ace-icon fa fa-expand" onClick="$.windowOpen(this)"></i>
          <i class="ace-icon fa fa-refresh" onClick="$.tabReload(this)"></i>
					<i class="ace-icon fa fa-times"  onClick="$.tabClose(this)"/>
					</a>
				</li>`;
    mainTabs.children().each(function() {
      $(this).removeClass("active");
    });
	
	var mainContent=$('#mainContent');
	var tabContent =`<div id="${Key}" class="tab-pane fade in active">
						<iframe
						id="iframe${Key}"
						src="${Uri}"
						style="border: 0"
						width="100%"
						/>
					</div>`;
	mainContent.children().each(function(){
		$(this).removeClass('in active');
	});
	if(!isExist){
		mainTabs.append(tab);
		mainContent.append(tabContent);
	}else{
		existNode.addClass("active");
		$('#'+Key).addClass("in active");
	}
  }

  render() {
    return (
      <div style={{ height: "100%" }}>
        <Head />
        <div
          className="main-container ace-save-state"
          id="main-container"
          style={{ height: "100%" }}
        >
          <Navigation openTab={this.openTab} />
          <div className="main-content">
            <div className="main-content-inner">
              <div className="breadcrumbs ace-save-state" id="breadcrumbs">
                <ul className="nav nav-tabs" id="mainTabs">
                  <li className="active">
                    <a data-toggle="tab" href={"#" + this.state.Key}>
                      <i className="green ace-icon fa fa-home bigger-120" />
                       <sapn>{this.state.Title}</sapn>
                    </a>
                  </li>
                </ul>
              </div>

              <div className="tab-content" id="mainContent">
                <div id={this.state.Key} className="tab-pane fade in active">
                  <iframe
                    id={"iframe" + this.state.Key}
                    src={this.state.Uri}
                    style={{ border: 0 }}
                    width="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Layout;
