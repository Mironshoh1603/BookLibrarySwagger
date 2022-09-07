const router = require("express").Router();
const bookController = require("../controller/book");
router.route("/").get(bookController.getAllBook).post(bookController.addBook);
router
  .route("/:id")
  .delete(bookController.deleteBook)
  .get(bookController.getBook)
  .patch(bookController.updateBook);

module.exports = router;
