//Configuração da conexão com o banco de dados MySQL.

import mysql from "mysql2";

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "isamanu0608@",
    database: "pokecloud"
});