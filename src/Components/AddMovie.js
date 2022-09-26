import React, { useState } from "react";
import Rate from "./Rate";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
Modal.setAppElement("#root");

const AddMovie = ({ handleAdd }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    title: "",
    posterUrl: "",
    description: "",
    rate: 1,
  });

  function clearForm() {
    setForm({
      title: "",
      posterUrl: "",
      description: "",
      rate: 1,
    });
  }
  function openModal() {
    clearForm();
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRate = (rate) => setForm({ ...form, rate: rate });

  return (
    <div>
      <button className="btn" onClick={openModal}>
        Add Movie
      </button>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        onRequestClose={closeModal}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            let newMovie = {
              ...form,
              id: Math.random(),
            };
            handleAdd(newMovie);
            closeModal();
          }}
        >
          <h2>Add new movie</h2>
          <label>Movie name: </label>
          <input
            type="text"
            value={form.title}
            name="title"
            onChange={handleChange}
          />
          <br />
          <label>Movie image: </label>
          <input
            type="url"
            value={form.posterUrl}
            name="posterUrl"
            onChange={handleChange}
          />
          <br />
          <label>Movie description: </label>
          <input
            type="text"
            value={form.description}
            name="description"
            onChange={handleChange}
          />
          <br />
          <label>Movie rate</label>
          <Rate rate={form.rate} handleRate={handleRate} />
          <button type="submit">Add</button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddMovie;
