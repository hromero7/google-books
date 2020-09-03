const router = require("express").Router();
let Book = require("../models/book");

router.get('/', (req, res) => {
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

router.post('/add', (req, res) => {
console.log("here");
  let newBook = new Book()
  newBook.title = req.body.title 
  newBook.subtitle = req.body.subtitle
  newBook.author = req.body.author
  newBook.description = req.body.description
  newBook.image = req.body.image
  newBook.link = req.body.link

  console.log(newBook);

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


router.delete('/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id, function (err) {
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



module.exports = router;
