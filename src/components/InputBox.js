import { useEffect, useState } from "react";
import "./InputBox.css";
import { v4 as uuidv4 } from "uuid";

export default function InputBox() {
  const [data, setData] = useState("");
  const [newData, setNewData] = useState(storedData());
  const [editIndex, setEditIndex] = useState(null);

  //Function to retrieve data from localStorage
  function storedData() {
    let localStorageData = localStorage.getItem("newData");
    if (localStorageData) {
      return JSON.parse(localStorageData);
    } else {
      return [];
    }
  }
  // Save data to localStorage whenever newData changes
  useEffect(() => {
    localStorage.setItem("newData", JSON.stringify(newData));
  }, [newData]);

  // Function to handle adding or editing data
  function handleClick() {
    if (data.trim() === "") {
      return alert("Please add some input!");
    }
    const duplicate = newData.some((item) => item.value === data);
    if (!duplicate) {
      if (editIndex != null) {
        const duplicate = newData.some((item) => item.value === data);
        if (duplicate) {
          return alert(
            `Data you are trying to edit with name "${data}" already exists!`
          );
        } else {
          const updatedData = newData.map((item, index) =>
            index === editIndex ? { ...item, value: data } : item
          );
          setNewData(updatedData);
          setData("");
          setEditIndex(null);
        }
      } else {
        const id = uuidv4();
        setNewData([...newData, { id, value: data }]);
        setData("");
      }
    } else {
      return alert(`Data with the name "${data}" already exists!`);
    }
  }

  // Function to handle editing a data item
  const handleEdit = (index) => {
    const itemToEdit = newData[index];
    setData(itemToEdit.value);
    console.log(itemToEdit);
    setEditIndex(index);
  };

  // Function to handle deleting a data item
  const handleDelete = (index) => {
    if (window.confirm("Are you sure you wants to delete this event?")) {
      const newArray = newData.filter((item, i) => i !== index);
      setNewData(newArray);
    }
  };

  // Function to handle pressing the Enter key to submit data
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div className="input-box">
      <div className="title">
        <h1>ToDo Application!</h1>
      </div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
        className="input-field"
        onKeyDown={handleKeyPress}
        placeholder="Please enter the event you wants to create. "
      />
      <button onClick={handleClick} name="inputData" className="submit-button">
        {editIndex != null ? "Update" : "Submit"}
      </button>
      <div className="data-header">
        <span className="header-value">Value</span>
        <span className="header-id">ID</span>
        <span className="header-action">Action</span>
      </div>
      <ul className="data-list">
        {newData?.map((item, index) => (
          <li key={item.id} className="data-item">
            <span className="item-value">{item.value}</span>
            <span className="item-id">{item.id}</span>
            <div className="button-container">
              <button onClick={() => handleEdit(index)} className="edit-button">
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="delete-button"
              >
                X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
