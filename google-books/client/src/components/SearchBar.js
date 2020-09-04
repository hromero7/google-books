import React from "react";

const SearchBar = (props) => {
    return (
        
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={props.setKeyword}/>
        <button className="btn btn-dark" type="submit" onClick={props.handleClick}>Search</button>
        </form>
       
    )
}

export default SearchBar;