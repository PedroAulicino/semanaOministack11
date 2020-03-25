const express = require("express");
const cors = require("cors");
const routes = require("./routes");
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//Metodos Http:
//Get: Buscar/lista uma informação do back-end
//Post : Criar uma informação no back-end
//PUT : Alterar uma informação no back-end
//Delete : Deletar uma informação no back-end

//Tipos de parametros:
//Query Params: Paraametros nomeados enviados na rota apos "?" (filtros,paginação)
//Route Params : Parametros utilizados para indentificar recursos
//Request Body : Corpo da requisição , utilizado para criar ou alterar usuario
