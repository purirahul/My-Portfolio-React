import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import resume from './resume.json';
import Header from './Header.js'
import Skills from './Skills';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Education from './Education.js'
import Projects from './Projects.js'
import Experience from './Experience.js'
import Achievement from './Achievement.js'


class App extends Component {

  renderSkills(){
    let resultArray = [];
    resume.skills.map((skill, i) =>
      resultArray.push(<Skills skill={skill} key={i} />)
    );
    return resultArray;
  }


  renderEducation(){
    let resEduArray = [];
    resume.education.map((edu, i) =>
    resEduArray.push(<Education edu={edu} key={i} />)
  );
    return resEduArray;
  }


  renderProjects(){
    let resProArray = [];
    resume.projects.map((pro, i) =>
    resProArray.push(<Projects pro={pro} key={i} />)
  );
    return resProArray;
  }


  renderExper(){
    let resExpArray = [];
    resume.exp.map((exp, i) =>
      resExpArray.push(<Experience exp={exp} key={i} />)
  );
    return resExpArray;
  }

  renderAchievements(){
    let resAchArray = [];
    resume.achievemnts.map((ach, i) =>
      resAchArray.push(<Achievement ach={ach} key={i} />)
  );
    return resAchArray;
  }

  render(){
  return (
    <div>
      <Header />


      <section className="portfolio-area section-padding-100 clearfix" id="exp">

          <div className="container">
              <div className="row">

                  <div className="col-12">
                      <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                          <div className="line mx-auto"></div>
                          <h2>Experience</h2>
                      </div>
                  </div>
              </div>

              <div className="row">

                  {this.renderExper()}
              </div>
            </div>
      </section>


      <section className="portfolio-area section-padding-100 clearfix mt-10" id="educ">

          <div className="container">
              <div className="row">

                  <div className="col-12">
                      <div className="section-heading text-center wow fadeInUp" data-wow-delay="300ms">
                          <div className="line mx-auto"></div>
                          <h2>Education Details</h2>
                      </div>
                  </div>
              </div>

              <div className="row">

                  {this.renderEducation()}
              </div>
            </div>
          </section>


      <div id="skills">
      <section className="skills-area clearfix" >
          <div className="container">
          <div className="col-12">
              <div className="section-heading  text-center wow fadeInUp" data-wow-delay="500ms">
                  <div className="line mx-auto"></div>
                  <h2>Skills and Proficiency</h2>
                  </div>
          </div>

              <div className="row " >

                {this.renderSkills()}

              </div>
          </div>
        </section>
        </div>



        <section className="portfolio-area section-padding-100 clearfix" id="portfolio">
            <div className="container">
                <div className="row">

                    <div className="col-12">
                        <div className="section-heading text-center mb-50 wow fadeInUp" data-wow-delay="300ms">
                            <div className="line mx-auto"></div>
                            <h2>My Projects</h2>
                        </div>
                    </div>
                  </div>

                  <div className="row">
                      {this.renderProjects()}
                  </div>
                </div>
          </section>
      </div>
    );
}
}

export default App;
