import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";



const Search = () => {

const componentDidMount = () => {
API.getBooks("dog")
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})
}

componentDidMount();
    return (
        <div>
        <Header/>
        <SearchBar/>
        <Card/>
        </div>
    )
}

export default Search;