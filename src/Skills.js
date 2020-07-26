import React, {Component} from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

class Skills extends Component{

  render(){
    return(
      <div className="col-12 col-sm-6 col-lg-3">
          <div className="single-skils-area mb-50 wow fadeInUp " data-wow-delay="400ms">
                  <span><CircularProgressbar value={this.props.skill.proficiency} text={this.props.skill.skill} styles={{
                    root: {
                      radius: 50
                    },
                    path: {
                    stroke: '#ffb016',
                    transition: 'stroke-dashoffset 0.5s ease 0s',

                  },
                  text: {
                    fill: '#ffb016',
                    fontSize: '16px'
                  }
                  }}/>
                  </span>
          </div>
      </div>

    )
  }
}



export default Skills;
