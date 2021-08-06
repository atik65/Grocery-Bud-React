import "./App.css";
import List from "./Components/List";
import Alert from "./Components/Alert";
import { useState, useEffect } from "react";

const getLocalStorage = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [
      { id: 123456, text: "Grocery Item one" },
      { id: 789456, text: "Grocery Item two" },
    ];
  }
};

function App() {
  const [name, setName] = useState("");
  const [editId, setEditId] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [isEditing, setIsEditing] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    title: "",
    color: "",
  });

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alertShow(true, "name can't be empty", "danger");
    } else if (name && isEditing) {
      alertShow(true, "Item Edited", "success");
      setList(
        list.map((item) => {
          if (item.id == editId) {
            return { ...item, text: name };
          }
          return item;
        })
      );

      setIsEditing(false);
    } else {
      const item = { id: `${new Date().getTime().toString()}`, text: name };

      setList([...list, item]);
      alertShow(true, "Item Added ", "success");
    }

    setName("");
  };

  const handleRemove = (id) => {
    const filtered = list.filter((item) => {
      return item.id !== id;
    });
    setList(filtered);
    alertShow(true, "Item Removed ", "danger");
  };

  const handleEdit = (id) => {
    const edit = list.find((item) => {
      return item.id === id;
    });
    setIsEditing(true);
    setEditId(id);
    setName(edit.text);
  };
  const removeAll = () => {
    setList([]);
  };

  const alertShow = (show = false, title = "", color = "") => {
    setAlert({
      show,
      title,
      color,
    });
  };
  return (
    <>
      <div className="container section">
        <div className="main">
          <div className="form-design">
            <h1 className="my-4">Grocery Bud</h1>
            {alert.show ? (
              <Alert alert={alert} alertShow={alertShow} list={list} />
            ) : null}
            <form className="d-flex" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="helpId"
                  placeholder="Add item"
                  value={name}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className=" mx-2 btn btn-outline-primary">
                {isEditing ? "Edit" : "Add"}
              </button>
            </form>
          </div>

          <List
            list={list}
            handleRemove={handleRemove}
            handleEdit={handleEdit}
            removeAll={removeAll}
          />
        </div>
      </div>
    </>
  );
}

export default App;
