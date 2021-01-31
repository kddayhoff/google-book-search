import axios from "axios";

//this is where we have methods for query database
export default{
    searchBooks: function(bookTitle) {
        return axios.get("/api/google/" + bookTitle)
    }
}