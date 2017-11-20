import React ,{Component} from 'react'
import ReactDOM from 'react-dom';
import Tab from './Tab';

class Navigation extends Component{

	constructor(props){
		super(props);
		this.openTab=this.props.openTab;
	}

	

    render(){
        return(
            <div id="sidebar" className="sidebar responsive ace-save-state">
                <ul className="nav nav-list">
                    <li className="active">
						<a href="javascript:void(0)" onClick={this.openTab}  >
							<i className="menu-icon fa fa-tachometer"></i>
							<span className="menu-text"> Dashboard </span>
						</a>
						<b className="arrow"></b>
					</li>
                    
                    <li className="">
						<a href="#" className="dropdown-toggle">
							<i className="menu-icon fa fa-desktop"></i>
							<span className="menu-text">
								UI &amp; Elements
							</span>

							<b className="arrow fa fa-angle-down"></b>
						</a>

						<b className="arrow"></b>

						<ul className="submenu">
							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-caret-right"></i>
									Layouts
									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
									<a href="javascript:void(0)" >
											<i className="menu-icon fa fa-caret-right"></i>
											Top Menu
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
									<a href="javascript:void(0)" >
											<i className="menu-icon fa fa-caret-right"></i>
											Two Menus 1
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
									<a href="javascript:void(0)" >
											<i className="menu-icon fa fa-caret-right"></i>
											Two Menus 2
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
									<a href="javascript:void(0)" >
											<i className="menu-icon fa fa-caret-right"></i>
											Default Mobile Menu
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
									<a href="javascript:void(0)" >
											<i className="menu-icon fa fa-caret-right"></i>
											Mobile Menu 2
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
									<a href="javascript:void(0)" >
											<i className="menu-icon fa fa-caret-right"></i>
											Mobile Menu 3
										</a>

										<b className="arrow"></b>
									</li>
								</ul>
							</li>

							<li className="">
							<a href="javascript:void(0)" >
									<i className="menu-icon fa fa-caret-right"></i>
									Typography
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
							<a href="javascript:void(0)"  >
									<i className="menu-icon fa fa-caret-right"></i>
									Elements
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
							<a href="javascript:void(0)"  >
									<i className="menu-icon fa fa-caret-right"></i>
									Buttons &amp; Icons
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
							<a href="javascript:void(0)"  >
									<i className="menu-icon fa fa-caret-right"></i>
									Content Sliders
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
							<a href="javascript:void(0)"  >
									<i className="menu-icon fa fa-caret-right"></i>
									Treeview
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
							<a href="javascript:void(0)"  >
									<i className="menu-icon fa fa-caret-right"></i>
									jQuery UI
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
							<a href="javascript:void(0)"  >
									<i className="menu-icon fa fa-caret-right"></i>
									Nestable Lists
								</a>

								<b className="arrow"></b>
							</li>

							<li className="">
								<a href="#" className="dropdown-toggle">
									<i className="menu-icon fa fa-caret-right"></i>

									Three Level Menu
									<b className="arrow fa fa-angle-down"></b>
								</a>

								<b className="arrow"></b>

								<ul className="submenu">
									<li className="">
										<a href="#">
											<i className="menu-icon fa fa-leaf green"></i>
											Item #1
										</a>

										<b className="arrow"></b>
									</li>

									<li className="">
										<a href="#" className="dropdown-toggle">
											<i className="menu-icon fa fa-pencil orange"></i>

											4th level
											<b className="arrow fa fa-angle-down"></b>
										</a>

										<b className="arrow"></b>

										<ul className="submenu">
											<li className="">
												<a href="#">
													<i className="menu-icon fa fa-plus purple"></i>
													Add Product
												</a>

												<b className="arrow"></b>
											</li>

											<li className="">
												<a href="#">
													<i className="menu-icon fa fa-eye pink"></i>
													View Products
												</a>

												<b className="arrow"></b>
											</li>
										</ul>
									</li>
								</ul>
							</li>
						</ul>
					</li>
                </ul>

                <div className="sidebar-toggle sidebar-collapse" id="sidebar-collapse">
					<i id="sidebar-toggle-icon" className="ace-icon fa fa-angle-double-left ace-save-state" data-icon1="ace-icon fa fa-angle-double-left" data-icon2="ace-icon fa fa-angle-double-right"></i>
				</div>
            </div>
        );
    }
}
export default Navigation;