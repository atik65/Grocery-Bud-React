import React from "react";

const SingleItem = ({ item, handleRemove, handleEdit }) => {
  return (
    <>
      <div className="singleItem my-2">
        <div className="me-5">{item.text}</div>
        <div className="d-flex">
          <button onClick={() => handleEdit(item.id)}>
            <i class="fas fa-edit    "></i>
          </button>

          <button onClick={() => handleRemove(item.id)}>
            <i class="fas fa-trash    "></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleItem;
