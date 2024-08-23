import book from "../Model/BookModel.js";  // Include the .js extension

export const getBook = async (req, res) => {
  try {
    const Book = await book.find();
    console.log(Book)
    res.status(200).json(Book);
  } catch (error) {
    console.log("Error:", error);
    res.status(500).json(error);
  }
};
