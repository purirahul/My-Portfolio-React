import React, {Component} from 'react';
import resume from './resume.json'

class AboutInfo extends Component{

  render(){
    return(
      <div className="hero-area bg-img clearfix" style={{backgroundImage: "url(img/bg-img/bg1.jpg)"}} id="about">
          <div className="container h-100">
              <div className="row h-100 align-items-center">
                  <div className="col-12 col-sm-10 col-md-8">

                      <div className="hero-content">
                          <h5 className="wow fadeInUp" data-wow-delay="1000ms">Hello I’m</h5>
                          <h2 className="wow fadeInUp" data-wow-delay="1230ms">{resume.name}</h2>
                          <h3 className="wow fadeInUp" data-wow-delay="1500ms">{resume.post}</h3>

                          <div className="contact-info mt-30 wow fadeInUp" data-wow-delay="1700ms">
                              <a href="#"><img src="img/core-img/envelope-small.png" alt="" /> {resume.email}</a>
                              <a href="#"><img src="img/core-img/phone-call-small.png" alt="" /> {resume.phone}</a>
                          </div>

                          <div className="social-info mt-30 wow fadeInUp" data-wow-delay="1900ms">
                              <a href="https://github.com/purirahul" data-toggle="tooltip" data-placement="top" title="Google Plus" style={{fontSize: "22px"}}><i class="fa fa-github" aria-hidden="true"/></a>
                              <a href="https://www.linkedin.com/in/rahul-puri-a4ba3b12b/" data-toggle="tooltip" data-placement="top" title="Pinterest" style={{fontSize: "22px"}}><i class="fa fa-linkedin" aria-hidden="true"></i></a>
                              <a href="https://www.facebook.com/profile.php?id=100009928621143" data-toggle="tooltip" data-placement="top" title="Facebook" style={{fontSize: "22px"}}><i class="fa fa-facebook" aria-hidden="true"></i></a>
                              <a href="https://twitter.com/Rahulpuri1997" data-toggle="tooltip" data-placement="top" title="Twitter" style={{fontSize: "22px"}}><i class="fa fa-twitter" aria-hidden="true"></i></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

    )
  }
}


export default AboutInfo;
