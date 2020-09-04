import React from "react";
import SavedBook from "./SavedBook";

const SavedList = (props) => {
    

    return (
        <div className="col-lg-12">
           
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
    )
}

export default SavedList;