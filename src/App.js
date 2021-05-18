import React from "react";
import "./App.css";

const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
  ],
  ativa: true,
};

const mario = {
  cliente: "Mario",
  idade: 31,
  compras: [
    { nome: "Notebook", preco: "R$ 2500" },
    { nome: "Geladeira", preco: "R$ 3000" },
    { nome: "Smartphone", preco: "R$ 1500" },
    { nome: "Guitarra", preco: "R$ 3500" },
  ],
  ativa: false,
};

function App() {
  const dados = mario;
 

  const total = dados.compras
    .map((item) => +item.preco.replace("R$ ", ""))
    .reduce((sum, item) => sum + item, 0);

  return (
    <>
      <section>
        <p>Nome: {dados.cliente}</p>
        <p>Idade: {dados.idade}</p>
        <p>
          Situação:{" "}
          <span style={{ color: dados.ativa ? "green" : "red" }}>
            {dados.ativa ? "Ativa" : "Inativa"}
          </span>
        </p>

        <p>Total gasto: {total}</p>
        {total > 10000 && <p>'Voce está gastando muito'</p>}
      </section>
    </>
  );
}

export default App;
