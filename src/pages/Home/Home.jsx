import React, { useState, useEffect } from "react";
import "./Home.css";

export default function Home() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [clickedItems, setClickedItems] = useState([]);

  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    const savedUsername = localStorage.getItem("username");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
    if (savedUsername) {
      setUsername(savedUsername);
    }
  }, []);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItems = [...items, input];
    setItems(newItems);
    localStorage.setItem("items", JSON.stringify(newItems));
    setInput("");
  };

  const clearItems = () => {
    setItems([]);
    localStorage.removeItem("items");
  };

  const handleItemClick = (index) => {
    if (clickedItems.includes(index)) {
      setClickedItems(clickedItems.filter((item) => item !== index));
    } else {
      setClickedItems([...clickedItems, index]);
    }
  };

  return (
    <main>
      <div>
        <h1 className="h1-home">
          {username
            ? `Lista de tarefas de ${username}`
            : "O que você quer realizar hoje?"}
        </h1>
        {localStorage.getItem("isAuthenticated") && (
          <div className="container_for_tasks">
            <form onSubmit={handleSubmit}>
              <input
                id="addTasktext"
                type="text"
                value={input}
                onChange={handleInputChange}
                maxlength="255"
                placeholder="Adicionar uma tarefa"
                tabindex="0"
                autocomplete="off"
              />
              <input className="addTask" type="submit" value="Adicionar" />
            </form>
          </div>
        )}
        {localStorage.getItem("isAuthenticated") && (
          <button className="button_delete_tasks" onClick={clearItems}>
            Limpar
          </button>
        )}
        <ul>
          {items.map((item, index) => (
            <li
              className={`li_items ${
                clickedItems.includes(index) ? "strikethrough" : ""
              }`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
