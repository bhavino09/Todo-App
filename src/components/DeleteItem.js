import { useState } from "react";
export default function DeleteItem() {
  const [list, setList] = useState([
    { id: 1, name: "HP" },
    { id: 2, name: "Dell" },
    { id: 3, name: "Acer" },
    { id: 4, name: "Mac" },
    { id: 5, name: "Asus" },
  ]);
  function handleClick(id) {
    const newList = list.filter((l) => l.id !== id);
    setList(newList);
  }
  return (
    <div>
      <ul>
        {list.map((data) => {
          return (
            <li key={data.id}>
              {data.id} {data.name}{" "}
              <button onClick={() => handleClick(data.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
