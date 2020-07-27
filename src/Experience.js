import React, {Component} from 'react';
import {Card} from 'react-bootstrap';

class Experience extends Component{

  render(){
    return(

      <Card  style={{ width: '1000px',background: '#ffd500',borderRadius: '8px', marginLeft: '50px', marginBottom: '50px', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}} className="wow fadeInUp" data-wow-delay='300ms'>
        <Card.Header ><h4>{this.props.exp.exp}</h4>
          <span>{this.props.exp.period}</span>
        </Card.Header>
          <Card.Body>
          <Card.Title>{this.props.exp.company}</Card.Title>
          <Card.Text style={{ color: '#000'}}>
            {this.props.exp.text}
          </Card.Text>

          </Card.Body>
        </Card>
    )
  }
}

export default Experience;
