import React from 'react';
import RatingComment from './RatingComment';

const RatingCard = (props) => {
  return (
    <div className="card">
        <div className="ratingButtons">
          <div className="btn btn-dark">5 stars</div>
          <div className="btn btn-primary">4 stars</div>
          <div className="btn btn-secondary">3 stars</div>
          <div className="btn btn-warning">2 stars</div>
          <div className="btn btn-danger">1 star</div>
        </div>
        <RatingComment/>
    </div>
  )
}

export default RatingCard

/* onClick have a pop-up form appear and have RatingComment entry form appear and submit. 
    How to best store comments and have them viewable for future users?
*/