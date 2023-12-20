import express from 'express';
import { addUser, deleteUser, getUsers, updateUser } from "../controllers/user.js";

const router = express.Router();

// Rota GET "/"
const getUser = (req, res) => {
  res.send('Informações do usuário');
};

router.get("/", getUser);

export default router;
