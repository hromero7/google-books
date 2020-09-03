import React from "react";
import SavedBook from "./SavedBook";

const SavedList = (props) => {
    

    return (
        <div className="card mb-3" style={{width: "85%"}}>
            <div className="row no-gutters">
            {
                props.books.map((book, i) => {
                    return (
                    <SavedBook 
                            key={i}
                            image={book.image}
                            title={book.title}
                            subtitle={book.subtitle}
                            authors={book.author}
                            description={book.description}
                            link={book.link} 
                            id={book._id}
                            />
                    )
                })
            }
            </div>
        </div>
    )
}

export default SavedList;