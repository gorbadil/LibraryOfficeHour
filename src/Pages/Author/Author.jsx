import { useState, useEffect } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getAuthors,
  deleteAuthor,
  createAuthor,
  updateAuthorFunc,
} from "../../API/author";
import "./Author.css";

function Author() {
  const [authors, setAuthors] = useState([]);
  const [reload, setReload] = useState(true);

  // New Author
  const [newAuthor, setNewAuthor] = useState({
    name: "",
    country: "",
    birthDate: "",
  });

  const [updateAuthor, setUpdateAuthor] = useState({
    name: "",
    country: "",
    birthDate: "",
  });

  const handleNewAuthor = (event) => {
    setNewAuthor({
      ...newAuthor,
      [event.target.name]: event.target.value,
    });
    console.log(newAuthor);
  };

  const handleCreate = () => {
    createAuthor(newAuthor).then(() => {
      setReload(true);
    });
    setNewAuthor({
      name: "",
      country: "",
      birthDate: "",
    });
  };

  // Delete Author
  const handleDelete = (id) => {
    deleteAuthor(id).then(() => {
      setReload(true);
    });
  };

  // Update Author
  const handleUpdateBtn = (author) => {
    setUpdateAuthor(author);
    console.log(updateAuthor);
  };

  const handleUpdateChange = (event) => {
    setUpdateAuthor({
      ...updateAuthor,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdate = () => {
    updateAuthorFunc(updateAuthor).then(() => {
      setReload(true);
    });
    setUpdateAuthor({
      name: "",
      country: "",
      birthDate: "",
    });
  };

  useEffect(() => {
    getAuthors().then((data) => {
      setAuthors(data);
    });
    setReload(false);
  }, [reload]);

  return (
    <div>
      <div className="category-newcategory">
        <h2>Yeni Yazar</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newAuthor.name}
          onChange={handleNewAuthor}
        />
        <input
          type="text"
          placeholder="Ülke"
          name="country"
          value={newAuthor.country}
          onChange={handleNewAuthor}
        />
        <input
          type="date"
          name="birthDate"
          value={newAuthor.birthDate}
          onChange={handleNewAuthor}
        />
        <button onClick={handleCreate}>Create</button>
      </div>
      <div className="category-updatecategory">
        <h2>Kategori Güncelle</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleUpdateChange}
          value={updateAuthor.name}
        />
        <input
          type="text"
          placeholder="Ülke"
          name="country"
          value={updateAuthor.country}
          onChange={handleUpdateChange}
        />
        <input
          type="date"
          name="birthDate"
          value={updateAuthor.birthDate}
          onChange={handleUpdateChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="list">
        <h2>Kategori Listesi</h2>
        {authors.map((author) => (
          <div key={author.id}>
            <h3>
              {author.name} {author.id} {author.birthDate}
              <span id={author.id} onClick={() => handleDelete(author.id)}>
                <DeleteIcon />
              </span>
              <span onClick={() => handleUpdateBtn(author)}>
                {" "}
                <UpdateIcon />{" "}
              </span>
            </h3>{" "}
            {author.country}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
