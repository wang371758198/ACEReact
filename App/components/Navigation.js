import React, { Component } from "react";
import ReactDOM from "react-dom";
import Tab from "./Tab";

class Navigation extends Component {
  constructor(props) {
    super(props);
   // this.openTab = this.props.openTab;
  }

  render() {
    return (
      <div id="sidebar" className="sidebar responsive ace-save-state">
        <ul className="nav nav-list">
          <li>
            <a href="#" className="dropdown-toggle">
              <i className="menu-icon fa fa-desktop" />
              <span className="menu-text">系统设置</span>
              <b className="arrow fa fa-angle-down" />
            </a>
            <b className="arrow" />
            <ul className="submenu">
              <li>
                <a href="javascript:void(0)"  className="tab" data-key="sys_menu" data-title="菜单设置" data-url="/System/Navigation/Index" >
                  <i className="menu-icon fa fa-tachometer" />
                  <span className="menu-text"> 菜单设置 </span>
                </a>
                <b className="arrow" />
              </li>
            </ul>
          </li>
          <li className="">
            <a href="#" className="dropdown-toggle">
              <i className="menu-icon fa fa-desktop" />
              <span className="menu-text">UI &amp; Elements</span>

              <b className="arrow fa fa-angle-down" />
            </a>

            <b className="arrow" />

            <ul className="submenu">
              <li className="">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-caret-right" />
                  Layouts
                  <b className="arrow fa fa-angle-down" />
                </a>

                <b className="arrow" />

                <ul className="submenu">
                  <li className="">
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-caret-right" />
                      Top Menu
                    </a>

                    <b className="arrow" />
                  </li>

                  <li className="">
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-caret-right" />
                      Two Menus 1
                    </a>

                    <b className="arrow" />
                  </li>

                  <li className="">
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-caret-right" />
                      Two Menus 2
                    </a>

                    <b className="arrow" />
                  </li>

                  <li className="">
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-caret-right" />
                      Default Mobile Menu
                    </a>

                    <b className="arrow" />
                  </li>

                  <li className="">
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-caret-right" />
                      Mobile Menu 2
                    </a>

                    <b className="arrow" />
                  </li>

                  <li className="">
                    <a href="javascript:void(0)">
                      <i className="menu-icon fa fa-caret-right" />
                      Mobile Menu 3
                    </a>

                    <b className="arrow" />
                  </li>
                </ul>
              </li>

              <li className="">
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-caret-right" />
                  Typography
                </a>

                <b className="arrow" />
              </li>

              <li className="">
                <a href="javascript:void(0)" className="tab" data-key="element" data-title="Element" data-url="/Home/About" >
                  <i className="menu-icon fa fa-caret-right" />
                  Elements
                </a>

                <b className="arrow" />
              </li>

              <li className="">
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-caret-right" />
                  Buttons &amp; Icons
                </a>

                <b className="arrow" />
              </li>

              <li className="">
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-caret-right" />
                  Content Sliders
                </a>

                <b className="arrow" />
              </li>

              <li className="">
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-caret-right" />
                  Treeview
                </a>

                <b className="arrow" />
              </li>

              <li className="">
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-caret-right" />
                  jQuery UI
                </a>

                <b className="arrow" />
              </li>

              <li className="">
                <a href="javascript:void(0)">
                  <i className="menu-icon fa fa-caret-right" />
                  Nestable Lists
                </a>

                <b className="arrow" />
              </li>

              <li className="">
                <a href="#" className="dropdown-toggle">
                  <i className="menu-icon fa fa-caret-right" />
                  Three Level Menu
                  <b className="arrow fa fa-angle-down" />
                </a>

                <b className="arrow" />

                <ul className="submenu">
                  <li className="">
                    <a href="#">
                      <i className="menu-icon fa fa-leaf green" />
                      Item #1
                    </a>

                    <b className="arrow" />
                  </li>

                  <li className="">
                    <a href="#" className="dropdown-toggle">
                      <i className="menu-icon fa fa-pencil orange" />
                      4th level
                      <b className="arrow fa fa-angle-down" />
                    </a>

                    <b className="arrow" />

                    <ul className="submenu">
                      <li className="">
                        <a href="#">
                          <i className="menu-icon fa fa-plus purple" />
                          Add Product
                        </a>

                        <b className="arrow" />
                      </li>

                      <li className="">
                        <a href="#">
                          <i className="menu-icon fa fa-eye pink" />
                          View Products
                        </a>

                        <b className="arrow" />
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>

        <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
          <i
            id="sidebar-toggle-icon"
            className="ace-icon fa fa-angle-double-left ace-save-state"
            data-icon1="ace-icon fa fa-angle-double-left"
            data-icon2="ace-icon fa fa-angle-double-right"
          />
        </div>
      </div>
    );
  }
}
export default Navigation;
