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
    <div>
        <div className="col-md-4">
             <img src={props.image} className="card-img" alt="thumbnail"/>
            </div>

            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <h5 className="card-title">{props.subtitle}</h5>
                    <p className="card-text"><small className="text-muted">Written By {props.authors.join(", ")}</small></p>
                    <p className="card-text">{props.description}</p>
                    <button className="btn btn-dark"><a href={props.link}>View</a></button>
                    <button className="btn btn-dark" onClick={handleDelete}>Delete</button>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
            </div> 
    </div>
    )
}

export default SavedBook;