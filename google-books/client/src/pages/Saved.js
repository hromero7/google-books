import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import SavedList from "../components/SavedList"
import API from "../utils/API";

const Saved = (props) => {
const [books, setBooks] = useState([]);
    useEffect(() => {
        API.getSavedBooks()
        .then (res => {
            setBooks(res.data)
        })
    }, [])

    console.log(books);
    
    return (
        <div>
            <Header/>
            <SavedList books={books}/>
        </div>
    )
}

export default Saved;