const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

let Book = require('./models/book.js')


mongoose.connect("mongodb://localhost/googlebooks", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on("connected", () => {
    console.log("mongoose is connected");
});



app.get('/api/books', (req, res) => {
  Book.find({}, function(err, docs){
    if(err){
      res.json({
        error : true, 
        error_message : err
      })
    } else {
      res.json(docs)
    }
  })
})

// axios.post(url, body, config)

app.post('/api/books', (req, res) => {

  let newBook = new Book()
  newBook.title = req.body.title 
  newBook.author = req.body.author
  newBook.description = req.body.description
  newBook.image = req.body.image
  newBook.link = req.body.link

  newBook.save( (err, book) => {
    if(err){
      return res.json({
        error : true, 
        error_message : err
      })
    } else {
      res.json({
        success : true, 
        book
      })
    }
  })
})


app.delete('/api/books/:id', (req, res) => {
  Book.deleteOne({ id : req.params.id }, function (err) {
    if (err){
      res.json({
        error : true, 
        error_message : err
      })
    } else {
      res.json({
        success : true 
      })
    }
  });
})



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
