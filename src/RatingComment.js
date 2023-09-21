import React from 'react';

/*
let  author="Sam" text="That was 🔥🔥🔥!"
author="Alex" text="Trash 💩"
author="Pat" text="dope AF 💯💯"
*/

const RatingComment = (props) => {
  return (
    <div className="commentCard">
      <div className="contentDetail">
        <a href="/" className="author">{props.author}</a>
        <div className="metadata">
          <span className="date"></span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
}

export default RatingComment;