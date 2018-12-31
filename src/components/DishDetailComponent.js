import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
  if (dish != null) {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

function RenderComments({ comments }) {
  if (comments != null) {
    const commentList = comments.map((comment) => {
      return (
        <li key={comment.id}>
          {comment.comment}
          <br />
          -- {comment.author} , {new Date(comment.date).toDateString()}
        </li>
      )
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <div id="comments">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {commentList}
          </ul>
        </div>
      </div>
    );
  } else {
    return (<div></div>);
  }
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <RenderDish dish={props.dish} />
          <RenderComments comments={props.dish.comments} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
        </div>
      </div>
    );
  }
}

export default DishDetail;
