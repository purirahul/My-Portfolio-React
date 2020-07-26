import React, {Component} from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';

class Projects extends Component{

  render(){
    return(
      <Card className="single-skils-area mb-50 wow fadeInUp  mt-10" data-wow-delay="200ms" style={{ width: '18rem', marginLeft: '70px', backgroundColor: '#ffd500', borderRadius: '10px', textAlign: 'left',boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <Card.Img variant="top" src={this.props.pro.img} style={{ marginTop: '6px'}}/>
        <Card.Body>
            <Card.Title>{this.props.pro.title}</Card.Title>
            <Card.Text style={{color: '#000'}}>
              {this.props.pro.desc}
            </Card.Text>
        </Card.Body>
    <ListGroup className="list-group-flush" >
        <ListGroupItem style={{backgroundColor: '#ffd500'}}>{this.props.pro.det1}</ListGroupItem>
        <ListGroupItem style={{backgroundColor: '#ffd500'}}>{this.props.pro.det2}</ListGroupItem>
        <ListGroupItem style={{backgroundColor: '#ffd500'}}>{this.props.pro.det3}</ListGroupItem>
    </ListGroup>
    <Card.Body>
        <Card.Link href={this.props.pro.gitlink}>Code</Card.Link>
        <Card.Link href="#">Live</Card.Link>
    </Card.Body>
  </Card>
  )
}
}

export default Projects;
