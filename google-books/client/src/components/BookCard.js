import React from "react";
import API from "../utils/API";

const BookCard = (props) => {
    const handleSave = () => {

        let bookToSave = {
            title: props.title,
            subtitle: props.subtitle,
            author: props.authors == null? "N/A": props.authors,
            description: props.description,
            image: props.image || "",
            link: props.link
        }
        console.log("console log" + props.authors);
        API.saveBook(bookToSave);
    }
        return (
<div className="card mb-3" style={{width:"100%"}}>
  <div className="row no-gutters">
    <div className="col-md-4">
      <img src={props.image} className="card-img" alt="thumbnail" style={{width:"150px", margin:"20px"}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h5 className="card-title">{props.subtitle}</h5>
    <p className="card-text"><small className="text-muted">Written By {props.authors == null ? "N/A": props.authors.join(", ")}</small></p>
    <p className="card-text" style={{fontSize:"14px"}}>{props.description}</p>
    <button className="btn btn-dark"><a href={props.link}>View</a></button>
    <button className="btn btn-dark" onClick={handleSave}>Save</button>
      </div>
    </div> 
    </div>
    </div>
    )
        
}

export default BookCard;