import { Button } from "bootstrap";
import React, { useState } from "react";
import Modal from "react-modal";
Modal.setAppElement("#root");

const AddMovie = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  const handleAdd = () => {
    const newMovie = {
      id: Math.floor(Math.random() * 1000),
      title,
      posterURL,
      description,
      rating: +rating,
    };
    props.add(newMovie);
    setTitle("");
    setPosterURL("");
    setDescription("");
    setRating("");
    closeModal();
  };

  return (
    <div>
      <button
        style={{ margin: "2rem", border: "solid 1px black", padding: "5px" }}
        onClick={openModal}
      >
        add movie
      </button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <h1 style={{ color: "black" }}>Add Movie</h1>
        <form>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="url"
            name="posterURL"
            value={posterURL}
            onChange={(e) => setPosterURL(e.target.value)}
          />
          <input
            type="number"
            name="rating"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
          <textarea
            name="description"
            cols="30"
            rows="10"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </form>
        <button onClick={handleAdd}>add</button>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};

export default AddMovie;
