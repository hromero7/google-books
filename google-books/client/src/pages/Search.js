import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CardContainer from "../components/CardContainer";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";



const Search = (props) => {

const [searchTerm, setSearchTerm] = useState();
const [bookData, setBookData] = useState([]);

// useEffect(() => {
//     searchBooks();
// },[searchTerm]);

const searchBooks = (searchTerm) => {
if (searchTerm == undefined) {
    API.getBooks("easter egg")
    .then(res => {
        return setBookData(res.data.items);
    })
    .catch(err => {
        console.log(err);
    })
} else {

API.getBooks(searchTerm)
.then(res => {
    return setBookData(res.data.items);
    
})
.catch(err => {
    console.log(err);
})
}
}

const handleClick = (e) => {
    e.preventDefault();
    searchBooks(searchTerm)
    
}
const setKeyword = (event) => {
    // console.log(event.target.value);
    setSearchTerm(event.target.value);
}
console.log(bookData);
    return (
        <div>
        <Header/>
        <SearchBar setKeyword={setKeyword} handleClick={handleClick}/>
        <CardContainer books={bookData}/>
        </div>
    )
}

export default Search;