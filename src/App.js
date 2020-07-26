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


  render(){
  return (
    <div>
      <Header />

      <section className="portfolio-area section-padding-100 clearfix" id="educ">

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


          <section class="testimonials-area section-padding-100 mt-10">
              <div class="container">
                  <div class="row">

                      <div class="col-12">
                          <div class="section-heading text-center wow fadeInUp mt-10" data-wow-delay="300ms">
                              <div class="line mx-auto"></div>
                              <h2>Achievements</h2>
                          </div>
                      </div>
                  </div>

                  <div class="row">
                      <div class="col-12">


                          <div class="testimonial-slides owl-carousel wow fadeInUp" data-wow-delay="500ms">
                            <div class="single-testimonial">
                              <img src="img/bg-img/resume.jpg"/>
                            </div>
                          </div>
                        </div>
                  </div>
              </div>
          </section>
      </div>
    );
}
}

export default App;
