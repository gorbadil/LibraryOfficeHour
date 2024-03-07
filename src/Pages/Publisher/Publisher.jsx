import { useState, useEffect } from "react";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  getPublishers,
  deletePublisher,
  createPublisher,
  updatePublisherFunc,
} from "../../API/publisher";
import "./Publisher.css";

function Publisher() {
  const [publishers, setPublishers] = useState([]);
  const [reload, setReload] = useState(true);
  // New Publisher
  const [newPublisher, setNewPublisher] = useState({
    name: "",
    establishmentYear: "",
    address: "",
  });

  const handleNewPublisher = (event) => {
    setNewPublisher({
      ...newPublisher,
      [event.target.name]: event.target.value,
    });
  };

  const handleNewPublisherBtn = () => {
    createPublisher(newPublisher).then(() => {
      setReload(true);
    });
    setNewPublisher({
      name: "",
      establishmentYear: "",
      address: "",
    });
  };

  // Delete Publsiher
  const handleDelete = (id) => {
    deletePublisher(id).then(() => {
      setReload(true);
    });
  };

  // Update Publisher
  const [updatePublisher, setUpdatePublisher] = useState({
    name: "",
    establishmentYear: "",
    address: "",
  });

  const handleUpdatePublisherInputs = (event) => {
    setUpdatePublisher({
      ...updatePublisher,
      [event.target.name]: event.target.value,
    });
  };

  const handleUpdateBtn = (publisher) => {
    setUpdatePublisher(publisher);
  };

  const handleUpdate = () => {
    updatePublisherFunc(updatePublisher).then(() => {
      setReload(true);
    });
    setUpdatePublisher({
      name: "",
      establishmentYear: "",
      address: "",
    });
  };

  useEffect(() => {
    getPublishers().then((data) => {
      setPublishers(data);
    });
    setReload(false);
  }, [reload]);

  return (
    <>
      <div className="category-newcategory">
        <h2>Yeni Yayımcı</h2>
        <input
          type="text"
          placeholder="Adı"
          name="name"
          value={newPublisher.name}
          onChange={handleNewPublisher}
        />
        <input
          type="text"
          placeholder="Adres"
          name="address"
          value={newPublisher.address}
          onChange={handleNewPublisher}
        />
        <input
          type="number"
          placeholder="Kuruluş Yılı"
          name="establishmentYear"
          value={newPublisher.establishmentYear}
          onChange={handleNewPublisher}
        />
        <button onClick={handleNewPublisherBtn}>Create</button>
      </div>
      <div className="category-updatecategory">
        <h2>Yayımcı Güncelle</h2>
        <input
          type="text"
          placeholder="Name"
          name="name"
          onChange={handleUpdatePublisherInputs}
          value={updatePublisher.name}
        />
        <input
          type="text"
          placeholder="Adres"
          name="address"
          value={updatePublisher.address}
          onChange={handleUpdatePublisherInputs}
        />
        <input
          type="number"
          placeholder="Kuruluş Yılı"
          name="establishmentYear"
          value={updatePublisher.establishmentYear}
          onChange={handleUpdatePublisherInputs}
        />
        <button onClick={handleUpdate}>Update</button>
      </div>
      <div className="list">
        <h2>Yayımcı Listesi</h2>
        {publishers.map((publisher) => (
          <div key={publisher.id}>
            <h3>
              {publisher.name} {publisher.id}
              <span
                id={publisher.id}
                onClick={() => handleDelete(publisher.id)}
              >
                <DeleteIcon />
              </span>
              <span onClick={() => handleUpdateBtn(publisher)}>
                {" "}
                <UpdateIcon />{" "}
              </span>
            </h3>{" "}
            {publisher.address}
          </div>
        ))}
      </div>
    </>
  );
}

export default Publisher;
