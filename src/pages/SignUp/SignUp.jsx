import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!username || !description) {
      alert("Todos os campos são obrigatórios!");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("description", description);
    localStorage.setItem("isAuthenticated", true);
    navigate("/");
  };

  const handleCancel = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("description");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("items");
    navigate("/");
  };

  return (
    <main>
      <form className="form_signup" onSubmit={handleSubmit}>
        <label className="name_label">
          Nome:
          <input
            className="input_textarea"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label className="description_text">
          Objetivo com a lista:
          <textarea
            className="signup_textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <button className="button_signup" type="submit">
          Cadastrar
        </button>
        <button className="cancelButton" type="button" onClick={handleCancel}>
          Encerrar cadastro
        </button>
      </form>
    </main>
  );
}
