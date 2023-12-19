import express from 'express';

const router = express.Router();

// Rota GET "/"
const getUser = (req, res) => {
  
  res.send('Informações do usuário');
};

router.get("/", getUser);

export default router;
