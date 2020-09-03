import axios from "axios";

export default {
    // Gets search results
    getBooks: function (searchTerm) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
    },
    getSavedBooks: function() {
        return axios.get("http://localhost:3001/books");
    },
    saveBook: function(bookData) {
        return axios.post("http://localhost:3001/books/add", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("http://localhost:3001/books/" + id);
    }
  };