import React, {Component} from 'react';


class Achievement extends Component{

  render(){
    return(

          <div className="carousel-item " >
              <img className="d-block w-100" src={this.props.ach.img} alt="First slide" />
          </div>
        )
  }
}

export default Achievement;
