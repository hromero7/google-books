import React from "react";
import logo from "../logo.svg";
import BookCard from "./BookCard";

const CardContainer = (props) => {

   return (
        
<div className="col-md-12">
      {
          props.books.map((book, i) => {
              return <BookCard
                          key={i}
                          image={book.volumeInfo.imageLinks.thumbnail}
                          title={book.volumeInfo.title}
                          subtitle={book.volumeInfo.subtitle}
                          authors={book.volumeInfo.authors}
                          description={book.volumeInfo.description}
                          link={book.accessInfo.webReaderLink} 
                          />
          })
      }
    
</div>
    )
   
}

export default CardContainer;