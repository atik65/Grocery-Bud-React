import React from "react";
import SingleItem from "./SingleItem";

const List = ({ list, handleRemove, handleEdit, removeAll }) => {
  return (
    <>
      {" "}
      <div className="mt-3">
        {list.map((item) => {
          return (
            <SingleItem
              item={item}
              handleRemove={handleRemove}
              handleEdit={handleEdit}
            />
          );
        })}
      </div>
      <div className="text-center mt-4">
        <button onClick={removeAll} className="btn btn-sm btn-outline-danger">
          Clear All
        </button>
      </div>
    </>
  );
};

export default List;
