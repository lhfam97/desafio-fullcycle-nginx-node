import express from "express";

import { createConnection } from "mysql";
import { generateRandomName } from "./generateName.js";
const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};

const connection = createConnection(config);

const sql = `INSERT INTO people(name) values('Luis Machado')`;
connection.query(sql);

app.get("/", async (req, res) => {
  connection.query("SELECT * FROM people", function (err, result, fields) {
    const generateList = () => {
      if (result) {
        const resultado = result.map((person) => {
          return `<li>${person.name}</li>`;
        });

        return resultado.join("");
      }
      return "";
    };
    generateList();
    res.send(
      `<h1>Full Cycle Rocks!</h1>
      <h2>Lista Usuarios</h2>
      <ol>${generateList()}</ol>
      <span style="color:red">Para gerar um novo nome é necessário acessar a rota http://localhost:8080/generate </span>`
    );
  });
});

app.get("/generate", async (req, res) => {
  const newName = await generateRandomName();
  const sql = `INSERT INTO people(name) values('${newName}')`;
  connection.query(sql);
  return res.sendStatus(201);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
