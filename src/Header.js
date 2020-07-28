import React, {Component} from 'react';
import AboutInfo from './AboutInfo.js'


class Header extends Component{

  render(){

    return(

      <header className="header-area">
            <div className="vcard-main-menu">
                <div className="classy-nav-container breakpoint-off">
                    <div className="container">

                        <nav className="classy-navbar justify-content-between" id="vcardNav">

                            <div className="classy-navbar-toggler">
                                <span className="navbarToggler"><span></span><span></span><span></span></span>
                            </div>

                            <div className="classy-menu">

                                <div className="classycloseIcon">
                                    <div className="cross-wrap"><span className="top"></span><span className="bottom"></span></div>
                                </div>


                                <div className="classynav">
                                    <ul id="vcardMenu">
                                        <li className="active"><a href="#about">About</a></li>
                                        <li><a href="#exp">Experience</a></li>
                                        <li><a href="#educ">Education</a></li>
                                        <li><a href="#skills">Skills</a></li>
                                        <li><a href="#portfolio">Projects</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                              </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
  }
}

export default Header;
