import React, {useState} from "react";
// bring in multiple styling items from material UI through template literal instead of long list
import {Container, Typography} from "@material-ui/core"
import BookSearchField from "../components/Textfield";
import SavedBookCard from "../components/SavedBookCard";
import API from "../utils/API"
// page layout done here - component stylingin the component itself - layout features from material grid list, box, container(holding everything), small items like buttons (ie submit button)
//any component has to be wrapped in container/div/box etc  -- one parent for everything inside
//this is a functional component 
export default function BookSearch(){
    
    //search term field input -- this is our state - searchTerm starts as empty string, setSearchTerm is the actual input (ex: harry potter). setSearchTerm is a function, and we call it inside of our actions
    const [searchTerm, setSearchTerm] = useState("");

    //holds results/books -- bookResults is an array, setBookResults is the action that puts our book INTO the array
    const [bookResults, setBookResults] = useState([]);

    //event that happens when we click the search button
    const handleSubmit = (event) => {
        const {value} = event.target
        setSearchTerm(value)
    }

    //setBookResults is an action were set the response from the API call in bookResults the array
    const searchBooks = () => {
        API.searchBooks(searchTerm)
        .then(res => {
            setBookResults(res.data) 
            console.log(bookResults)
        })   
        .catch((err) => console.log(err))
    }

//name = title is so we know what we're searching for, no functionality to it. Action here is just what where doing, not a built in term for react
    return(
    <Container>
    <div>Book Search Page</div>
        <BookSearchField 
        name = "title"
        searchBooks = {searchBooks}
        handleInputChange = {handleSubmit}
        searchTerm = {searchTerm}
         />

        <SavedBookCard/>

    </Container>
)}




