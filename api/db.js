import mysql from "mysql";

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "crud"
});

// Inicia a conexão com o banco de dados
db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão ao banco de dados MySQL estabelecida!');
});

export { db };
