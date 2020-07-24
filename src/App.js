import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import resume from './resume.json'


class App extends Component {
  render(){
  return (
    <Header />
    );
}
}

export default App;



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
                                        <li><a href="#skills">Skills</a></li>
                                        <li><a href="#services">Services</a></li>
                                        <li><a href="#portfolio">Portfolio</a></li>
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
