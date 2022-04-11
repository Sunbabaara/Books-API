const {Router} = require("express")

const {getBooks, deleteBook, deleteBookByFind} = require("../controllers/booksController")


const router =Router();

router.route("/books").get(getBooks)
router.delete("/books/:title", deleteBook)

router.delete("/books/find/:title",deleteBookByFind)
module.exports =router