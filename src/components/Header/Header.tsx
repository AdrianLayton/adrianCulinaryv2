import React, { Component } from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';




interface IHeaderState {
  headerClass: string;
  headerActive: boolean
}

export default class Header extends React.Component<{}, IHeaderState> {
		constructor(props:any) {
        super(props);

        this.state = {
          headerClass : 'mob-nav',
          headerActive : true
        };
		}
	    
	    // handleClick(e) {
			// e.preventDefault();
	    // 	this.toggleClass();
	    // }	

		toggleState() {
			this.setState(function(prevState, props){
				return {headerActive: !prevState.headerActive}
   				})
		 }

		render () {		
			return (
				<div className={this.state.headerActive ? "header wht-bckgd" : "header"}>
					<span className="preview">This site is currently in preview it will be launched December 15th, 2019</span>
					<div className="logo-container">
						<img id="nav-logo" src="./img/logo.png" />
					</div>
					<div className="mob-header-ctn">
						<span className="logo-left mob-nav">
							<i className="logo-icon fas fa-hamburger"></i>
							<h2 className="logo-text">AdrianCulinary</h2>
						</span>
						<div className={this.state.headerActive ? "mob-nav change" : "mob-nav"} id="mob-nav"
						 onClick={() => this.toggleState()}>
							<div className="bar1"></div>
							<div className="bar2"></div>
							<div className="bar3"></div>
						</div>
						<div className={this.state.headerActive ? "mob-nav-ctn" : "mob-nav-ctn hidden"}>
							<ul className="mob-menu">
								<li className="mb-nav-items">Home</li>
								<li className="mb-nav-items">About</li>
								<li className="mb-nav-items">Cooking Resources</li>
							</ul>						 
						</div>
					</div>
					<div className="nav-primary">
						<ul className="menu">
							<NavLink className="nav-items" exact to="/"> <li > Home </li> </NavLink>
							<NavLink className="nav-items" to="/about"> <li > About </li> </NavLink>
							<NavLink className="nav-items" to="/CookWare"> <li >  Cooking Resources  </li> </NavLink>
						</ul>
					</div>
				</div>
)}}


