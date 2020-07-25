import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import resume from './resume.json';
import Header from './Header.js'
import Skills from './Skills';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


class App extends Component {

  renderSkills(){
    let resultArray = [];
    resume.skills.map((skill, i) =>
      resultArray.push(<Skills skill={skill} key={i} />)
    );
    return resultArray;
  }


  render(){
  return (
    <div>
      <Header />

      <div id="skills">
      <section className="skills-area clearfix" >
          <div className="container">
          <div className="col-12">
              <div className="section-heading white text-center wow fadeInUp" data-wow-delay="300ms">
                  <div className="line mx-auto"></div>
                  <h2>Skills and Proficiency</h2>
                  </div>
          </div>

              <div className="row">

                {this.renderSkills()}

              </div>
              </div>
              </section>
              </div>

      </div>
    );
}
}

export default App;
