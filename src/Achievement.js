import React, {Component} from 'react';


class Achievement extends Component{

  render(){
    return(

      <div className="carousel-inner">
          <div className="carousel-item active">
              <img className="d-block w-100" src={this.props.ach.img} alt="First slide" />
          </div>
        </div>
    )
  }
}

export default Achievement;
