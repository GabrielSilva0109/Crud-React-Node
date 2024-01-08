import { db } from "../db.js";

export const getUsers = (_, res) => {
  const q = "SELECT * FROM usuarios";

  db.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });
};

export const addUser = (req, res) => {
  const q =
    "INSERT INTO usuarios (`nome`, `email`, `fone`, `data_nasc`) VALUES (?, ?, ?, ?)";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, values, (err, result) => {
    if (err) {
      console.error("Erro ao inserir usuário:", err);
      return res.status(500).json({ message: "Erro ao criar usuário." });
    }

    const insertedUserId = result.insertId; // Obtém o ID do usuário inserido

    db.query(
      `SELECT * FROM usuarios WHERE id = ${insertedUserId}`,
      (err, data) => {
        if (err) {
          console.error("Erro ao buscar usuário inserido:", err);
          return res.status(500).json({ message: "Erro ao buscar usuário." });
        }

        return res.status(200).json(data[0]); // Retorna os dados do usuário inserido
      }
    );
  });
};



export const updateUser = (req, res) => {
  const q =
    "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nasc` = ? WHERE `id` = ?";

  const values = [
    req.body.nome,
    req.body.email,
    req.body.fone,
    req.body.data_nascimento,
  ];

  db.query(q, [...values, req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário atualizado com sucesso.");
  });
};

export const deleteUser = (req, res) => {
  const q = "DELETE FROM usuarios WHERE `id` = ?";

  db.query(q, [req.params.id], (err) => {
    if (err) return res.json(err);

    return res.status(200).json("Usuário deletado com sucesso.");
  });
};