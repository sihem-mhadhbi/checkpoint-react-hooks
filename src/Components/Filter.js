import React, { useState } from "react";
import Rate from "./Rate";

const Filter = (props) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    props.setText(e.target.value);
  };

  return (
    <div
      style={{
        width: 800,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        margin: "auto",
      }}
    >
      <input
        style={{ width: "100%", padding: "1rem", color: "blue" }}
        type="text"
        value={props.text}
        onChange={handleChange}
      />
      <Rate rating={props.rating} setRating={props.setRating} />
    </div>
  );
};
export default Filter;
