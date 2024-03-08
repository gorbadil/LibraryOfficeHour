import { useEffect, useState } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getBooks,
  deleteBook,
  createBook,
  updateBookFunc,
} from "../../API/book";
import { getAuthors } from "../../API/author";
import { getPublishers } from "../../API/publisher";

function Book() {
  const [books, setBooks] = useState([]);
  const [reload, setReload] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [publishers, setPublishers] = useState([]);
  const [newBook, setNewBook] = useState({
    name: "",
    publicationYear: "",
    stock: "",
  });
  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
    });
    getAuthors().then((data) => {
      setAuthors(data);
    });
    getPublishers().then((data) => {
      setPublishers(data);
    });
    setReload(false);
  }, [reload]);

  const handleCreate = () => {
    createBook(newBook).then(() => {
      setReload(true);
    });
    setNewBook({
      name: "",
      publicationYear: "",
      stock: "",
    });
  };
  const handleDelete = (id) => {};
  const handleUpdateBtn = (book) => {};
  const handleNewBook = (e) => {
    if (e.target.name === "author") {
      return setNewBook({
        ...newBook,
        author: {
          id: e.target.value,
        },
      });
    } else {
      setNewBook({
        ...newBook,
        [e.target.name]: e.target.value,
      });
    }
    console.log(newBook);
  };
  return (
    <div>
      <div className="category-newcategory">
        <h2>Yeni Kitap</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newBook.name}
          onChange={handleNewBook}
        />
        <input
          type="number"
          placeholder="Yayım Yılı"
          name="publicationYear"
          value={newBook.country}
          onChange={handleNewBook}
        />
        <input
          type="number"
          name="stock"
          placeholder="Stok"
          value={newBook.stock}
          onChange={handleNewBook}
        />
        <select
          name="author"
          value={newBook?.author?.id}
          onChange={handleNewBook}
        >
          <option value="" disabled selected>
            Yazar Seçiniz
          </option>
          {authors.map((author) => (
            <option key={author.id} value={author.id}>
              {author.name}
            </option>
          ))}
        </select>
        <select
          name="publisher"
          value={newBook?.publisher?.id}
          onChange={handleNewBook}
        >
          <option value="" selected disabled>
            Yayınevi Seçiniz
          </option>
          {publishers.map((publisher) => (
            <option key={publisher.id} value={publisher.id}>
              {publisher.name}
            </option>
          ))}
        </select>
        <button onClick={handleCreate}>Create</button>
      </div>
      <div className="list">
        <h2>Kategori Listesi</h2>
        {books.map((book) => (
          <div key={book.id}>
            <h3>
              {book.name} {book?.author?.name}
              {/* <span id={author.id} onClick={() => handleDelete(author.id)}> */}
              {/* <DeleteIcon /> */}
              {/* </span> */}
              {/* <span onClick={() => handleUpdateBtn(author)}> */}
              {/* {" "} */}
              {/* <UpdateIcon />{" "} */}
              {/* </span> */}
            </h3>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Book;
