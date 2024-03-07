import { useState, useEffect } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getCategories,
  deleteCategory,
  createCategory,
  updateCategoryFunc,
} from "../../API/category";
import "./Category.css";

function Category() {
  const [category, setCategory] = useState([]);
  const [reload, setReload] = useState(true);
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
  });

  const [updateCategory, setUpdateCategory] = useState({
    name: "",
    description: "",
  });

  useEffect(() => {
    getCategories().then((data) => {
      setCategory(data);
    });
    setReload(false);
  }, [reload]);

  const handleDelete = (id) => {
    deleteCategory(id).then(() => {
      setReload(true);
    });
  };

  const handleUpdate = () => {
    updateCategoryFunc(updateCategory).then(() => {
      setReload(true);
    });
    setUpdateCategory({
      name: "",
      description: "",
    });
  };

  const handleNewCategory = (event) => {
    setNewCategory({
      ...newCategory,
      [event.target.name]: event.target.value,
    });
  };

  const handleCreate = () => {
    createCategory(newCategory).then(() => {
      setReload(true);
    });
    setNewCategory({
      name: "",
      description: "",
    });
  };

  const handleUpdateBtn = (cat) => {
    setUpdateCategory({
      name: cat.name,
      description: cat.description,
      id: cat.id,
    });
  };

  const handleUpdateChange = (event) => {
    setUpdateCategory({
      ...updateCategory,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <>
      <h1>Category</h1>
      <div className="category-newcategory">
        <h2>Yeni Kategori</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={newCategory.name}
          onChange={handleNewCategory}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={newCategory.description}
          onChange={handleNewCategory}
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
          value={updateCategory.name}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={updateCategory.description}
          onChange={handleUpdateChange}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="list">
        <h2>Kategori Listesi</h2>
        {category.map((category) => (
          <div key={category.id}>
            <h3>
              {category.name} {category.id}
              <span id={category.id} onClick={() => handleDelete(category.id)}>
                <DeleteIcon />
              </span>
              <span onClick={() => handleUpdateBtn(category)}>
                {" "}
                <UpdateIcon />{" "}
              </span>
            </h3>{" "}
            {category.description}
          </div>
        ))}
      </div>
    </>
  );
}

export default Category;
