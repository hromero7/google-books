import React from "react";
import API from "../utils/API";

const SavedBook = (props) => {

    const handleDelete = () => {
        API.deleteBook(props.id)
            .then(res => {
                console.log(res)
                
                window.location = "/saved";
            })
    }

    return (
    <div className="card mb-3" style={{width: "100%"}}>
        <div className="row no-gutter">
        <div className="col-md-4">
             <img src={props.image} className="card-img" alt={props.title} style={{width: "150px", margin: "20px"}}/>
            </div>

            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">{props.subtitle}</h5>
                    <p className="card-text"><small className="text-muted">Written By {props.authors.join(", ")}</small></p>
                    <p className="card-text" style={{fontSize:"14px"}}>{props.description}</p>
                    <button className="btn btn-dark"><a href={props.link} target="_blank" rel="noopener noreferrer">View</a></button>
                    <button className="btn btn-dark" onClick={handleDelete}>Delete</button>
                </div>
            </div> 
        </div>
    </div>
    )
}

export default SavedBook;