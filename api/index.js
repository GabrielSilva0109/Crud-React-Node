// Importar o módulo Express corretamente
import express from 'express';

// Importar as rotas dos usuários
import userRoutes from './routes/users.js';

// Importar o módulo CORS
import cors from 'cors';

const app = express();

// Permitir o uso de JSON no Express
app.use(express.json());

// Habilitar o CORS
app.use(cors());

// Definir as rotas para os usuários
app.use('/', userRoutes);

// Iniciar o servidor na porta 8800
app.listen(8800, () => {
  console.log('Servidor rodando na porta 8800');
});
