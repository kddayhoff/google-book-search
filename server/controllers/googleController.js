const axios = require("axios");

module.exports = {
    findByTitle:
    function(req, res){
        let title = req.params.title;
        axios.get('https://www.googleapis.com/books/v1/volumes?q=' + title)
        .then(bookData => {
            res.json(bookData.data.items)
            console.log(bookData.data.items)
        })
        .catch((err) => res.json(err))
    }
}