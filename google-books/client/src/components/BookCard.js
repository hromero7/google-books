import React from "react";

const BookCard = (props) => {
        return (
<div>
    <div className="col-md-4">
      <img src={props.image} className="card-img" alt="thumbnail"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.subtitle}</h5>
    <p className="card-text"><small className="text-muted">Written By {props.authors}</small></p>
    <p className="card-text">{props.description}</p>
    <a href={props.link}>View</a>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div> 
    </div>
    )
        
}

export default BookCard;