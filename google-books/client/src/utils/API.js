import axios from "axios";

export default {
    // Gets search results
    getBooks: function (searchTerm) {
      return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + searchTerm);
    },
    getSavedBooks: function() {
        return axios.get("/books");
    },
    saveBook: function(bookData) {
        return axios.post("/books/add", bookData);
    },
    deleteBook: function(id) {
        return axios.delete("/books/" + id);
    }
  };

  