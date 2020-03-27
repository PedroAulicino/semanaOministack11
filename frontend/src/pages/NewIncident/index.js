import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logo from "../../assets/logo.svg";
import "./styles.css";
import api from "../../services/api";
export default function NewIncident() {
  const [title, setTile] = useState("");
  const [description, setdescription] = useState("");
  const [value, setvalue] = useState("");

  const history = useHistory();

  const ongId = localStorage.getItem("ongId");

  async function handlenew(e) {
    e.preventDefault();

    const data = {
      title,
      description,
      value
    };
    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (err) {
      alert("Erro ao cadastrar caso , tente denovo");
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Be The Hero" />
          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente</p>
          <Link className="back-link" to="/profile">
            <FiArrowLeft size={16} color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handlenew}>
          <input
            placeholder="Titulo do caso"
            value={title}
            onChange={e => setTile(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setdescription(e.target.value)}
          />
          <input
            placeholder="Valor em reais"
            value={value}
            onChange={e => setvalue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
