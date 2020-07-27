import React, {Component} from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap'


class Education extends Component{

  render(){

    return(

      <Card className=" mb-50 wow fadeInUp  " data-wow-delay="200ms" style={{ width: '18rem', marginLeft: '70px', backgroundColor: '#ffd500', borderRadius: '10px', textAlign: 'left',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <Card.Body>
            <Card.Title>{this.props.edu.qualification}</Card.Title>
        </Card.Body>
          <ListGroup className="list-group-flush" >
            <ListGroupItem style={{backgroundColor: '#ffd500'}}><b>University:</b>{this.props.edu.board}</ListGroupItem>
            <ListGroupItem style={{backgroundColor: '#ffd500'}}><b>College:</b>{this.props.edu.clg}</ListGroupItem>
            <ListGroupItem style={{backgroundColor: '#ffd500'}}><b>Session:</b>{this.props.edu.session}</ListGroupItem>
            <ListGroupItem style={{backgroundColor: '#ffd500'}}><b>Grade:</b>{this.props.edu.grade}</ListGroupItem>
          </ListGroup>
        </Card>

    )
  }
}

export default Education;
