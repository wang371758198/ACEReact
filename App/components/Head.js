import React ,{Component} from 'react'

class Head extends Component{
   render(){
       return(
        <div id="navbar" className="navbar navbar-default ace-save-state">
            <div className="navbar-container ace-save-state" id="navbar-container">
                <div className="navbar-header pull-left">
                    <a href="#" className="navbar-brand">
                        <small>
                            <i className="fa fa-leaf"></i>
                            Admin
                        </small>
                    </a>
                </div>

                <div className="navbar-buttons navbar-header pull-right" role="navigation">
                    <ul className="nav ace-nav">
                        
                        <li className="green dropdown-modal">
                            <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                                <i className="ace-icon fa fa-envelope icon-animated-vertical"></i>
                                <span className="badge badge-success">5</span>
                            </a>

                            <ul className="dropdown-menu-right dropdown-navbar dropdown-menu dropdown-caret dropdown-close">
                                <li className="dropdown-header">
                                    <i className="ace-icon fa fa-envelope-o"></i>
                                    5 消息
                                </li>

                                <li className="dropdown-content">
                                    <ul className="dropdown-menu dropdown-navbar">
                                        <li>
                                            <a href="#" className="clearfix">
                                                <img src="www/lib/assets/images/avatars/avatar.png" className="msg-photo" alt="Alex's Avatar" />
                                                <span className="msg-body">
                                                    <span className="msg-title">
                                                        <span className="blue">Alex:</span>
                                                        Ciao sociis natoque penatibus et auctor ...
                                                    </span>

                                                    <span className="msg-time">
                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                        <span>a moment ago</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="clearfix">
                                                <img src="www/lib/assets/images/avatars/avatar3.png" className="msg-photo" alt="Susan's Avatar" />
                                                <span className="msg-body">
                                                    <span className="msg-title">
                                                        <span className="blue">Susan:</span>
                                                        Vestibulum id ligula porta felis euismod ...
                                                    </span>

                                                    <span className="msg-time">
                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                        <span>20 minutes ago</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="clearfix">
                                                <img src="www/lib/assets/images/avatars/avatar4.png" className="msg-photo" alt="Bob's Avatar" />
                                                <span className="msg-body">
                                                    <span className="msg-title">
                                                        <span className="blue">Bob:</span>
                                                        Nullam quis risus eget urna mollis ornare ...
                                                    </span>

                                                    <span className="msg-time">
                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                        <span>3:15 pm</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="clearfix">
                                                <img src="www/lib/assets/images/avatars/avatar2.png" className="msg-photo" alt="Kate's Avatar" />
                                                <span className="msg-body">
                                                    <span className="msg-title">
                                                        <span className="blue">Kate:</span>
                                                        Ciao sociis natoque eget urna mollis ornare ...
                                                    </span>

                                                    <span className="msg-time">
                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                        <span>1:33 pm</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>

                                        <li>
                                            <a href="#" className="clearfix">
                                                <img src="www/lib/assets/images/avatars/avatar5.png" className="msg-photo" alt="Fred's Avatar" />
                                                <span className="msg-body">
                                                    <span className="msg-title">
                                                        <span className="blue">Fred:</span>
                                                        Vestibulum id penatibus et auctor  ...
                                                    </span>

                                                    <span className="msg-time">
                                                        <i className="ace-icon fa fa-clock-o"></i>
                                                        <span>10:09 am</span>
                                                    </span>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>

                                <li className="dropdown-footer">
                                    <a href="inbox.html">
                                        See all messages
                                        <i className="ace-icon fa fa-arrow-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="light-blue dropdown-modal">
                            <a data-toggle="dropdown" href="#" className="dropdown-toggle">
                                <img className="nav-user-photo" src="www/lib/assets/images/avatars/user.jpg" alt="Jason's Photo" />
                                <span className="user-info">
                                    <small>欢迎</small>
                                    Jason
                                </span>

                                <i className="ace-icon fa fa-caret-down"></i>
                            </a>

                            <ul className="user-menu dropdown-menu-right dropdown-menu dropdown-yellow dropdown-caret dropdown-close">
                                <li>
                                    <a href="#">
                                        <i className="ace-icon fa fa-cog"></i>
                                        设 置
                                    </a>
                                </li>

                                <li>
                                    <a href="profile.html">
                                        <i className="ace-icon fa fa-user"></i>
                                        个人中心
                                    </a>
                                </li>

                                <li className="divider"></li>

                                <li>
                                    <a href="#">
                                        <i className="ace-icon fa fa-power-off"></i>
                                        退 出
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
       );
   }
}

export default Head;