import React from "react";
import logo from "../logo.svg";

const Card = (props) => {


    return (
        
<div className="card mb-3" style={{width: "85%"}}>
  <div className="row no-gutters">
      
    {/* <div className="col-md-4">
      <img src={props.data.items[0].imageLinks.thumbnail} className="card-img" alt="thumbnail"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.data.items[0].volumeInfo.title}</h5>
        <h5 className="card-title">{props.data.items[0].volumeInfo.subtitle}</h5>
    <p className="card-text"><small className="text-muted">Written By {props.data.items[0].volumeInfo.authors[0]}</small></p>
    <p className="card-text">{props.data.items[0].volumeInfo.description}</p>
    <a href={props.data.items[0].accessInfo.webReaderLink}>View</a>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div> */}
  </div>
</div>
    )
}

export default Card;