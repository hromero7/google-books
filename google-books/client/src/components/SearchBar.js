import React from "react";

const SearchBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
        <form className="form-inline">
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-primary" type="submit">Search</button>
        </form>
    </nav>
    )
}

export default SearchBar;