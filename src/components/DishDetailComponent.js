import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  renderDish(dish) {
    if (dish != null) {
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(dish.comments)}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
  renderComments(comments) {
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
        <div id="comments">
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {commentList}
          </ul>
        </div>
      );
    } else {
      return (<div></div>);
    }

  }
  render() {
    return (
      <div className="container">
        {this.renderDish(this.props.dish)}
      </div>
    );
  }
}

export default DishDetail;
